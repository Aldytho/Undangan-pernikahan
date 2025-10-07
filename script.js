const nav = document.querySelector('.nav');
document.querySelector('.menu-btn').addEventListener('click', () => {
  nav.classList.toggle('open');
});


document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    nav.classList.remove('open');
  });
});



const targetDate = new Date("October 18, 2125 08:00:00").getTime();
const countdown = document.getElementById("countdown");
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = 
    days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik";
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "selamat datang hari bahagia";
  }
}, 1000);





const doaForm = document.getElementById('doaForm');
const ucapanList = document.getElementById('ucapanList');
const STORAGE_DOA = 'doa_ucapan_v2';

function renderUcapan(){
  ucapanList.innerHTML = '';
  const items = JSON.parse(localStorage.getItem(STORAGE_DOA) || '[]');
  items.slice().reverse().forEach(({nama,pesan,ts})=>{
    const div = document.createElement('div');
    div.className = 'ucapan-item';
    const date = new Date(ts).toLocaleString('id-ID',{dateStyle:'medium', timeStyle:'short'});
    div.innerHTML = `<strong>${nama}</strong>: ${pesan} <span class="date">${date}</span>`;
    ucapanList.appendChild(div);
  });
}
doaForm.addEventListener('submit', e=>{
  e.preventDefault();
  const nama = document.getElementById('namaDoa').value.trim();
  const pesan = document.getElementById('pesanDoa').value.trim();
  if(nama.length < 2 || pesan.length < 2) return;
  const items = JSON.parse(localStorage.getItem(STORAGE_DOA) || '[]');
  items.push({nama,pesan,ts: Date.now()});
  localStorage.setItem(STORAGE_DOA, JSON.stringify(items));
  doaForm.reset();
  renderUcapan();
});
renderUcapan();




