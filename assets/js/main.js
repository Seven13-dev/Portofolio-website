(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#yr').textContent=new Date().getFullYear();

/* Kamus bahasa */
const T={
id:{nav_home:'BERANDA',nav_about:'TENTANG',nav_skills:'SKILLS',nav_minat:'MINAT',nav_kontak:'KONTAK',
 h_status:'TERBUKA UNTUK KOLABORASI',h_loc:'BERBASIS DI TULUNGAGUNG, ID',h_today:'HARI INI:',h_scroll:'GULIR KE BAWAH',
 t_about:'Tentang <em>Saya</em>',ab_hi:'Hai, saya',
 ab_p1:'Pelajar yang berfokus pada web development, dengan minat pada jaringan, keamanan siber, dan teknologi cloud. Saya senang mengubah ide menjadi halaman web yang rapi, responsif, dan punya karakter dengan HTML dan CSS sebagai fondasi.',
 ab_p2:'Saat ini saya terus mengasah kemampuan lewat latihan dan proyek pribadi, serta terbuka terhadap kritik, saran, dan kolaborasi.',
 ab_btn:'Hubungi Saya',t_skills:'Kemampuan <em>Saya</em>',sk_core:'BAHASA INTI',sk_learn:'SEDANG DIPELAJARI',sk_tools:'TOOLS &amp; EKOSISTEM',sk_net:'Jaringan Komputer',
 t_minat:'Bidang <em>Minat</em>',m_edit:'Mengolah video dan visual menjadi cerita yang menarik.',m_fin:'Memahami cara uang bekerja, dari menabung hingga berinvestasi.',m_cyb:'Menjaga sistem dan data tetap aman dari berbagai ancaman digital.',
 m_iot:'Perangkat yang saling terhubung dalam kehidupan sehari-hari.',m_cloud:'Teknologi di balik layanan digital yang kita pakai.',m_code:'Dasar-dasar pemrograman, dimulai dari langkah kecil.',m_ai:'Memanfaatkan kecerdasan buatan untuk belajar dan berkarya dengan lebih efisien.',
 ct_title:'<span>AYO KITA</span><span>CIPTAKAN</span><span>SESUATU</span><span class="accent">BERSAMA.</span>',
 ct_p:'Tertarik berkolaborasi, punya kritik, atau saran? Isi formulir di samping atau kirim email langsung ke saya.',ct_email:'EMAIL LANGSUNG',ct_social:'MEDIA SOSIAL',
 f_name:'NAMA KAMU',f_email:'EMAIL KAMU',f_subject:'SUBJEK',f_msg:'PESAN',ph_name:'Nama lengkap',ph_email:'nama@email.com',ph_msg:'Ceritakan tentang proyek atau idemu...',ph_subject:'Contoh: Kolaborasi Proyek',f_captcha:'Centang kotak “I’m not a robot” dulu.',f_cap_fail:'Verifikasi captcha gagal, silakan coba lagi.',f_cap_load:'reCAPTCHA belum termuat. Muat ulang halaman atau matikan ad-blocker.',f_long:'Pesan terlalu panjang untuk dikirim, mohon dipersingkat.',
 f_send:'KIRIM PESAN',f_sending:'MENGIRIM...',f_ok:'Pesan terkirim! Terima kasih, saya akan segera membalas.',f_err:'Gagal mengirim pesan. Coba lagi sebentar, atau kirim email langsung.',f_wait:'Tunggu sebentar sebelum mengirim pesan lagi.',copied:'Email disalin',
 roles:['Pelajar TKJ','Pengembang Web Pemula','Penyuka Teknologi']},
en:{nav_home:'HOME',nav_about:'ABOUT',nav_skills:'SKILLS',nav_minat:'INTERESTS',nav_kontak:'CONTACT',
 h_status:'OPEN TO COLLABORATION',h_loc:'BASED IN TULUNGAGUNG, ID',h_today:'TODAY:',h_scroll:'SCROLL DOWN',
 t_about:'About <em>Me</em>',ab_hi:"Hi, I'm",
 ab_p1:'A student focused on web development, with a growing interest in networking, cyber security, and cloud technology. I enjoy turning ideas into clean, responsive web pages with character, built on a solid HTML and CSS foundation.',
 ab_p2:'I keep sharpening my skills through practice and personal projects, and I welcome feedback, suggestions, and collaboration.',
 ab_btn:'Contact Me',t_skills:'My <em>Skills</em>',sk_core:'CORE LANGUAGES',sk_learn:'CURRENTLY LEARNING',sk_tools:'TOOLS &amp; ECOSYSTEM',sk_net:'Computer Networking',
 t_minat:'Fields of <em>Interest</em>',m_edit:'Turning video and visuals into compelling stories.',m_fin:'Understanding how money works, from saving to investing.',m_cyb:'Keeping systems and data safe from digital threats.',
 m_iot:'Connected devices in our everyday lives.',m_cloud:'The technology behind the digital services we use.',m_code:'Programming fundamentals, starting with small steps.',m_ai:'Using artificial intelligence to learn and create more efficiently.',
 ct_title:'<span>LET’S BUILD</span><span>SOMETHING</span><span class="accent">TOGETHER.</span>',
 ct_p:'Interested in collaborating, or got feedback or ideas? Fill out the form or drop me a direct email.',ct_email:'DIRECT EMAIL',ct_social:'SOCIAL PRESENCE',
 f_name:'YOUR NAME',f_email:'YOUR EMAIL',f_subject:'SUBJECT',f_msg:'MESSAGE',ph_name:'Your full name',ph_email:'name@email.com',ph_msg:'Tell me about your project or idea...',ph_subject:'e.g. Project Collaboration',f_captcha:'Please tick “I’m not a robot” first.',f_cap_fail:'Captcha verification failed, please try again.',f_cap_load:'reCAPTCHA has not loaded. Reload the page or disable your ad-blocker.',f_long:'Your message is too long to send, please shorten it.',
 f_send:'SEND MESSAGE',f_sending:'SENDING...',f_ok:'Message sent! Thank you, I will get back to you soon.',f_err:'Failed to send the message. Please try again shortly, or email me directly.',f_wait:'Please wait a moment before sending another message.',copied:'Email copied',
 roles:['TKJ Student','Beginner Web Developer','Tech Enthusiast']}};
let lang=root.dataset.lang==='en'?'en':'id';
const fit=()=>{const h=$('#heroName');if(innerWidth<=760){h.style.fontSize='';return}
  h.style.fontSize='100px';h.style.fontSize=Math.floor(100*h.parentElement.clientWidth/h.scrollWidth*.99)+'px'};
const applyLang=l=>{lang=l;root.dataset.lang=l;root.lang=l;try{localStorage.setItem('lang',l)}catch(e){}
  $$('[data-i18n]').forEach(el=>el.innerHTML=T[l][el.dataset.i18n]);
  $$('[data-ph]').forEach(el=>el.placeholder=T[l][el.dataset.ph]);
  $('#today').textContent=new Date().toLocaleDateString(l==='id'?'id-ID':'en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase();
  rw=0;rc=0;rdel=false};
$('#langBtn').addEventListener('click',()=>applyLang(lang==='id'?'en':'id'));

/* Tema gelap/terang (efek lingkaran melebar dari tombol) */
const btn=$('#themeBtn');
const setTheme=t=>{root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}$('meta[name=theme-color]').content=t==='dark'?'#0a0505':'#fbf5f3'};
btn.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  if(!document.startViewTransition||reduce)return setTheme(next);
  const r=btn.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,
  rad=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
  document.startViewTransition(()=>setTheme(next)).ready.then(()=>
    root.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${rad}px at ${x}px ${y}px)`]},
    {duration:650,easing:'ease-in-out',pseudoElement:'::view-transition-new(root)'}));
});

/* Menu mobile */
const burger=$('#burger'),menu=$('#menu');
const closeMenu=()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false')};
burger.addEventListener('click',()=>burger.setAttribute('aria-expanded',menu.classList.toggle('open')));
$$('a',menu).forEach(a=>a.addEventListener('click',closeMenu));

/* Scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.reveal').forEach(el=>io.observe(el));

/* Scrollspy + progress bar */
const links=$$('a',menu),secs=links.map(a=>$(a.getAttribute('href')));
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>s&&spy.observe(s));
const prog=$('#progress');
addEventListener('scroll',()=>{prog.style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%'},{passive:true});

/* Teks role mengetik (hero) */
const out=$('#typed');let rw=0,rc=0,rdel=false;
(function type(){
  const roles=T[lang].roles,word=roles[rw%roles.length];
  if(reduce){out.textContent=roles[0];return}
  out.textContent=word.slice(0,rc);
  if(!rdel&&rc===word.length){rdel=true;return setTimeout(type,1500)}
  if(rdel&&rc===0){rdel=false;rw=(rw+1)%roles.length}
  rc+=rdel?-1:1;setTimeout(type,rdel?40:90);
})();

/* Nama lengkap di About: efek diketik saat terlihat */
const nameEl=$('#nameType'),full='ARKA PUTRA MAULANA.';
if(reduce)nameEl.textContent=full;
else new IntersectionObserver((es,ob)=>{if(es[0].isIntersecting){ob.disconnect();let i=0;(function t(){nameEl.textContent=full.slice(0,++i);if(i<full.length)setTimeout(t,85)})()}},{threshold:.6}).observe($('.nm'));

/* Kode ASTERIA di hero: efek diketik */
const SRC=`const ASTERIA = { creator: "Arka Putra Maulana", alias: "ASTERIA", role: "Student & Web Developer", focus: [ "Web Development", "UI Design", "Creative Coding", ], principles: [ "Keep Learning", "Build with Purpose", "Improve Every Day", ], status: "Always Learning and don't give up...", }; export default ASTERIA;`;
const segs=[];let last=0;
SRC.replace(/"[^"]*"|\b(?:const|export|default)\b/g,(m,off)=>{if(off>last)segs.push(['',SRC.slice(last,off)]);segs.push([m[0]==='"'?'s':'k',m]);last=off+m.length;return m});
if(last<SRC.length)segs.push(['',SRC.slice(last)]);
const mk=c=>{const s=document.createElement('span');if(c)s.className=c;return s};
const ghost=$('#codeGhost'),live=$('#codeLive'),codeCaret=$('.caret',live);
segs.forEach(([c,t])=>{const s=mk(c);s.textContent=t;ghost.appendChild(s)});
if(reduce)segs.forEach(([c,t])=>{const s=mk(c);s.textContent=t;live.insertBefore(s,codeCaret)});
else{
  let si=0,ci=0,cur=null;
  const restart=()=>{[...live.children].forEach(n=>{if(n!==codeCaret)n.remove()});si=0;ci=0;cur=null;typeCode()};
  function typeCode(){
    if(si>=segs.length)return setTimeout(restart,2000+Math.random()*2000);   /* jeda 2-4 detik lalu ulang */
    const [c,t]=segs[si];
    if(ci===0){cur=mk(c);live.insertBefore(cur,codeCaret)}
    cur.textContent+=t[ci++];
    if(ci>=t.length){si++;ci=0}
    setTimeout(typeCode,32+Math.random()*22);
  }
  setTimeout(typeCode,600);
}

/* Kontak: salin email */
const copyBtn=$('#copyMail');
copyBtn.addEventListener('click',async()=>{
  const mail='arkaputra2110@gmail.com';
  try{await navigator.clipboard.writeText(mail)}catch(e){
    const t=document.createElement('textarea');t.value=mail;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(_){}t.remove()}
  copyBtn.classList.add('done');copyBtn.title=T[lang].copied;
  setTimeout(()=>{copyBtn.classList.remove('done');copyBtn.title='Copy'},1800);
});

/* Kontak: Google reCAPTCHA + kirim ke /api/contact (server memverifikasi lalu mengirim email) */
const form=$('#contactForm'),status=$('#formStatus'),sendBtn=$('#sendBtn'),sendLbl=$('span',sendBtn);
const capBox=$('#captcha'),capWrap=capBox.parentElement;
let capId=null,capTheme=null,lastSent=0;
const say=(msg,cls)=>{status.textContent=msg;status.className='form-status '+(cls||'')};
const fitCaptcha=()=>{const s=Math.min(1,capWrap.clientWidth/304);capBox.style.transform=s<1?`scale(${s})`:'';capWrap.style.height=Math.round(78*s)+'px'};
function renderCaptcha(){
  if(!window.grecaptcha||!grecaptcha.render)return;
  const theme=document.documentElement.dataset.theme==='light'?'light':'dark';
  if(capId!==null&&theme===capTheme)return;
  capBox.innerHTML='';capTheme=theme;
  capId=grecaptcha.render(capBox,{sitekey:capBox.dataset.sitekey,theme,callback:()=>say('')});
  fitCaptcha();
}
window.onRecaptchaLoad=renderCaptcha;
new MutationObserver(renderCaptcha).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
addEventListener('resize',fitCaptcha);fitCaptcha();

form.addEventListener('submit',async e=>{
  e.preventDefault();
  if(!form.checkValidity())return form.reportValidity();
  const fd=new FormData(form);
  if(fd.get('_honey')){say(T[lang].f_ok,'ok');form.reset();return}   /* bot: pura-pura sukses */
  if(!window.grecaptcha||capId===null){say(T[lang].f_cap_load,'err');return}
  const token=grecaptcha.getResponse(capId);
  if(!token){say(T[lang].f_captcha,'err');return}
  if(lastSent&&Date.now()-lastSent<30000){say(T[lang].f_wait,'err');return}
  sendBtn.disabled=true;sendLbl.textContent=T[lang].f_sending;say('');
  try{
    const res=await fetch('/api/contact',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name:fd.get('name'),email:fd.get('email'),subject:fd.get('subject'),message:fd.get('message'),captcha:token})});
    const data=await res.json().catch(()=>({}));
    if(!res.ok||!data.ok){
      const k=data.error==='captcha'?'f_cap_fail':data.error==='too_long'?'f_long':'f_err';
      say(T[lang][k],'err');return;
    }
    lastSent=Date.now();say(T[lang].f_ok,'ok');form.reset();
  }catch(err){say(T[lang].f_err,'err')}
  finally{sendBtn.disabled=false;sendLbl.textContent=T[lang].f_send;try{grecaptcha.reset(capId)}catch(_){}}
});

/* Tilt 3D mengikuti kursor */
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce){
  $$('[data-tilt]').forEach(el=>{
    const max=el.classList.contains('card')?8:10;
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      el.style.transition='transform .1s';
      el.style.transform=`perspective(800px) rotateY(${px*max}deg) rotateX(${-py*max}deg) scale(1.03)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transition='transform .5s';el.style.transform=''});
  });
}

/* Latar: jaringan titik */
const cv=$('#net'),ctx=cv.getContext('2d');let W,H,pts=[],mouse={x:-999,y:-999};
const size=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight;const n=Math.min(70,Math.floor(W*H/22000));
  pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
size();
addEventListener('resize',()=>{size();fit()});
addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY},{passive:true});
function draw(){
  const rgb=getComputedStyle(root).getPropertyValue('--net').trim();
  ctx.clearRect(0,0,W,H);
  pts.forEach((p,i)=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
    ctx.fillStyle=`rgba(${rgb},.7)`;ctx.beginPath();ctx.arc(p.x,p.y,1.6,0,6.3);ctx.fill();
    for(let j=i+1;j<pts.length;j++){
      const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);
      if(d<130){ctx.strokeStyle=`rgba(${rgb},${.28*(1-d/130)})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}
    }
    const m=Math.hypot(p.x-mouse.x,p.y-mouse.y);
    if(m<160){ctx.strokeStyle=`rgba(${rgb},${.5*(1-m/160)})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke()}
  });
  if(!reduce&&!document.hidden)requestAnimationFrame(draw);
}
draw();
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!reduce)draw()});

applyLang(lang);fit();
if(document.fonts)document.fonts.ready.then(fit);
})();
