# Credits & Copyright

## About the Creator

This website was conceptualized and designed by Arka Putra Maulana, based on my own ideas, creativity, and vision for the project.

## Development Credits

The website was developed with assistance from Claude AI to refine, restructure, and improve the code implementation. The development process involved transforming my ideas and design concepts into a functional website.

## Copyright Notice

© 2026 Arka Putra Maulana. All rights reserved.

The design concepts and original contributions to this project belong to the creator. Any use, reproduction, or redistribution of this project should provide appropriate credit to the original creator.

Third-party assets, libraries, or resources, if any, remain the property of their respective owners and are subject to their own licenses.

## Form kontak (reCAPTCHA + Resend)

Form mengirim ke `/api/contact` (`api/contact.js`, Vercel Serverless Function) yang memverifikasi Google reCAPTCHA v2 lalu mengirim email lewat Resend.

1. Daftar reCAPTCHA v2 "I'm not a robot" di https://www.google.com/recaptcha/admin, tambahkan domain Vercel-mu. Tempel **Site Key** di `index.html` pada `data-sitekey="..."` (elemen `#captcha`).
2. Daftar di https://resend.com memakai email tujuan (arkaputra2110@gmail.com), lalu buat API key.
3. Di Vercel, buka Settings > Environment Variables, isi `RECAPTCHA_SECRET_KEY` dan `RESEND_API_KEY` (lihat `.env.example`), lalu Redeploy.

**Font:** Archivo (judul), Inter (paragraf), JetBrains Mono (elemen teknis), Pally (elemen pendek), Telma (aksen "Hai, saya").

