const monthlyBtn = document.querySelector(".monthly");
const yearlyBtn = document.querySelector(".yearly");

const prices = document.querySelectorAll(".price");

monthlyBtn.addEventListener("click",()=>{

monthlyBtn.classList.add("active");
yearlyBtn.classList.remove("active");

prices[0].innerHTML='$9 <span>/month</span>';
prices[1].innerHTML='$19 <span>/month</span>';
prices[2].innerHTML='$39 <span>/month</span>';

});

yearlyBtn.addEventListener("click",()=>{

yearlyBtn.classList.add("active");
monthlyBtn.classList.remove("active");

prices[0].innerHTML='$89 <span>/year</span>';
prices[1].innerHTML='$189 <span>/year</span>';
prices[2].innerHTML='$389 <span>/year</span>';

});



// ================= HEADER SCROLL =================

window.addEventListener("scroll",()=>{

const header = document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(5,8,22,.95)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}

else{

header.style.background="rgba(0,0,0,.15)";
header.style.boxShadow="none";

}

});



// ================= CARD HOVER EFFECT =================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x = e.offsetX;
const y = e.offsetY;

card.style.transform =
`perspective(1000px)
rotateX(${-(y-150)/25}deg)
rotateY(${(x-150)/25}deg)
translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});



// ================= FAQ ACCORDION =================

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box=>{

box.addEventListener("click",()=>{

box.classList.toggle("open");

});

});



// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

const sections = document.querySelectorAll(
".card,.feature-box,.testimonial,.faq-box,.comparison,.newsletter,.cta"
);

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition=".8s";

observer.observe(section);

});




// ================= BUTTON RIPPLE EFFECT =================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

let circle = document.createElement("span");

circle.style.left =
e.offsetX+"px";

circle.style.top =
e.offsetY+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});




// ================= NEWSLETTER =================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email = form.querySelector("input");

if(email.value===""){

alert("Please enter your email");

}

else{

alert("Subscribed Successfully!");

email.value="";

}

});




// ================= BACK TO TOP =================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.background="#fde047";
topBtn.style.color="#111827";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};




// ================= ACTIVE NAV LINKS =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(nav=>{

nav.classList.remove("active");

});

link.classList.add("active");

});

});




// ================= CTA BUTTON =================

const ctaBtn = document.querySelector(".cta button");

ctaBtn.addEventListener("click",()=>{

alert("Welcome to CharityWin ❤️");

});