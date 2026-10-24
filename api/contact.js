/**
 * Vercel Serverless Function: POST /api/contact
 * 1) Memverifikasi token Google reCAPTCHA (server-side)
 * 2) Mengirim isi form ke email lewat Resend
 *
 * Environment Variables (Vercel -> Settings -> Environment Variables):
 *   RECAPTCHA_SECRET_KEY  (wajib)  Secret Key dari Google reCAPTCHA v2 Checkbox
 *   RESEND_API_KEY        (wajib)  API key dari resend.com
 *   CONTACT_TO_EMAIL      (opsional) tujuan email, default arkaputra2110@gmail.com
 *   CONTACT_FROM          (opsional) pengirim, default "ASTERIA Portfolio <onboarding@resend.dev>"
 */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (v, max) => String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max);
const MAX_MESSAGE = 50000; // batas teknis server (jauh di atas pesan normal)

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }

  const { RECAPTCHA_SECRET_KEY, RESEND_API_KEY } = process.env;
  const TO = process.env.CONTACT_TO_EMAIL || 'arkaputra2110@gmail.com';
  const FROM = process.env.CONTACT_FROM || 'ASTERIA Portfolio <onboarding@resend.dev>';
  if (!RECAPTCHA_SECRET_KEY || !RESEND_API_KEY) {
    console.error('Env RECAPTCHA_SECRET_KEY / RESEND_API_KEY belum diisi');
    return res.status(500).json({ ok: false, error: 'config' });
  }

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};

  if (b._honey) return res.status(200).json({ ok: true }); // bot: pura-pura sukses

  if (String(b.message || '').length > MAX_MESSAGE) return res.status(413).json({ ok: false, error: 'too_long' });
  const name = clean(b.name, 100);
  const email = clean(b.email, 160);
  const subject = clean(b.subject, 160).replace(/\n+/g, ' ');
  const message = clean(b.message, MAX_MESSAGE);
  const token = clean(b.captcha, 4000);

  if (!name || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'invalid' });
  }
  if (!token) return res.status(400).json({ ok: false, error: 'captcha' });

  // 1) Verifikasi reCAPTCHA
  try {
    const params = new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY, response: token });
    const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    if (ip) params.set('remoteip', ip);
    const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });
    const v = await r.json();
    if (!v.success) return res.status(403).json({ ok: false, error: 'captcha' });
  } catch (e) {
    console.error('reCAPTCHA verify error:', e);
    return res.status(502).json({ ok: false, error: 'captcha_service' });
  }

  // 2) Kirim email (Resend)
  try {
    const html = `<table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">
<tr><td style="padding:6px 14px 6px 0;color:#666">Nama</td><td><b>${esc(name)}</b></td></tr>
<tr><td style="padding:6px 14px 6px 0;color:#666">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
<tr><td style="padding:6px 14px 6px 0;color:#666">Subjek</td><td>${esc(subject)}</td></tr>
<tr><td style="padding:6px 14px 6px 0;color:#666;vertical-align:top">Pesan</td><td style="white-space:pre-wrap">${esc(message)}</td></tr></table>`;
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: '[Portfolio] ' + subject,
        html,
        text: `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\n${message}`
      })
    });
    if (!r.ok) {
      console.error('Resend error:', r.status, await r.text());
      return res.status(502).json({ ok: false, error: 'send' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Send error:', e);
    return res.status(502).json({ ok: false, error: 'send' });
  }
};
