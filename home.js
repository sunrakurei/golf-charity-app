const reveals = document.querySelectorAll(
".step-card,.feature-box,.prize-card,.plan,.testimonial,.faq-item"
);

window.addEventListener("scroll",()=>{

reveals.forEach(card=>{

const windowHeight = window.innerHeight;
const revealTop = card.getBoundingClientRect().top;
const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){
card.classList.add("active");
}

});

});

// Counter Effect

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText='0';

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');
const current=+counter.innerText;

const increment=target/100;

if(current<target){
counter.innerText=


setTimeout(updateCounter,20);
}
else{
counter.innerText=target;
}
}

updateCounter();

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){
nav.style.boxShadow=
"0 5px 20px rgba(0,0,0,.4)";
}
else{
nav.style.boxShadow="none";
}

});