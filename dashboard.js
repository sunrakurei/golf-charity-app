const heroTitle = document.querySelector(".hero h1");

const hour = new Date().getHours();

if(hour < 12){

heroTitle.innerHTML = "Good Morning, Sarah 👋";

}

else if(hour < 18){

heroTitle.innerHTML = "Good Afternoon, Sarah 👋";

}

else{

heroTitle.innerHTML = "Good Evening, Sarah 👋";

}



// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".stat-card,.action-card,.activity-item,.winning-card,.impact-card,.subscription-card,.notification-box div"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// ================= NOTIFICATION BELL =================

const bell = document.querySelector(".notification");

setInterval(()=>{

bell.style.transform = "rotate(15deg)";

setTimeout(()=>{

bell.style.transform = "rotate(-15deg)";

},200);

setTimeout(()=>{

bell.style.transform = "rotate(0deg)";

},400);

},5000);




// ================= ACTIVE SIDEBAR =================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item=>{

item.addEventListener("click",()=>{

document.querySelector(".sidebar .active")
.classList.remove("active");

item.classList.add("active");

});

});




// ================= HERO BUTTON EFFECT =================

const heroButtons = document.querySelectorAll(".hero button");

heroButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});




// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

let target = counter.innerText.replace(/[^0-9]/g,'');

let count = 0;

let speed = target/100;

function updateCounter(){

if(count < target){

count += speed;

counter.innerText = Math.floor(count);

updateCounter();

requestAnimationFrame(updateCounter);

}

}

if(target>0){

updateCounter();

}

});




// ================= TABLE ROW HOVER =================

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row=>{

row.addEventListener("mouseenter",()=>{

row.style.transform="scale(1.01)";

});

row.addEventListener("mouseleave",()=>{

row.style.transform="scale(1)";

});

});




// ================= NOTIFICATION POPUP =================

setTimeout(()=>{

const popup = document.createElement("div");

popup.className = "popup";

popup.innerHTML = `

<i class="fa-solid fa-bell"></i>

Draw Results Published Successfully

`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},4000);

},3000);




// ================= SMOOTH PAGE LOAD =================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});



