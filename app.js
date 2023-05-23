let hr = document.querySelector('#hr');
let mm = document.querySelector('#mm');
let sc = document.querySelector('#sc');


setInterval(() =>{
let time = new Date();
let hrs = time.getHours() * 30;
let mins = time.getMinutes() * 6;
let secs = time.getSeconds() * 6;

hr.style.transform = `rotateZ(${hrs + (mins/12)}deg)`;
mm.style.transform = `rotateZ(${mins}deg)`;
sc.style.transform = `rotateZ(${secs}deg)`;

// digital clock

let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h >= 12 ? "PM" : "AM";

if (h > 12) {
    h = h - 12;
}

h = (h<10) ? "0" + h : h;
m = (m<10) ? "0" + m : m;
s = (s<10) ? "0" + s : s;

hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;


},1000);