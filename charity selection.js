const searchInput = document.querySelector(".search-filter input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter = searchInput.value.toUpperCase();

let cards = document.querySelectorAll(".charity-card");

cards.forEach(card=>{

let text = card.innerText.toUpperCase();

card.style.display = text.includes(filter) ? "" : "none";

});

});

}



// ================= CATEGORY FILTER =================

const categorySelect = document.querySelector(".search-filter select");

if(categorySelect){

categorySelect.addEventListener("change",()=>{

console.log("Category:",categorySelect.value);

});

}



// ================= DONATION SLIDER =================

const slider = document.querySelector(".range-slider");

const contribution = document.querySelectorAll(".summary-item strong")[1];

if(slider && contribution){

slider.addEventListener("input",()=>{

contribution.innerHTML = slider.value + "%";

});

}



// ================= PERCENTAGE BUTTONS =================

document.querySelectorAll(".percentage-buttons button").forEach(btn=>{

btn.addEventListener("click",()=>{

let value = btn.innerText.replace("%","");

if(slider){

slider.value = value;

}

if(contribution){

contribution.innerHTML = value + "%";

}

});

});




// ================= DONATE BUTTON =================

document.querySelectorAll(".donate-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("❤️ Thank You For Supporting Charity!");

});

});




// ================= VIEW DETAILS =================

document.querySelectorAll(".details-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("📖 Charity Details Loaded");

});

});




// ================= POPUP =================

function showPopup(message){

const popup = document.createElement("div");

popup.className = "popup";

popup.innerHTML = message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3000);

}




// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".impact-card h2");

counters.forEach(counter=>{

let target = parseInt(counter.innerText.replace(/,/g,""));

let count = 0;

let speed = target / 100;

function updateCounter(){

if(count < target){

count += speed;

counter.innerText = Math.floor(count).toLocaleString();

requestAnimationFrame(updateCounter);

}

else{

counter.innerText = target.toLocaleString();

}

}

updateCounter();

});




// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".charity-card,.impact-card,.story-card,.recommend-card,.testimonial-card,.related-card,.faq-item"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// ================= NEWSLETTER =================

const newsletterBtn = document.querySelector(".newsletter button");

if(newsletterBtn){

newsletterBtn.addEventListener("click",()=>{

const email = document.querySelector(".newsletter input").value;

if(email===""){

showPopup("⚠️ Please Enter Email");

}

else{

showPopup("✅ Subscription Successful");

}

});

}




// ================= LOCAL STORAGE =================

document.querySelectorAll(".donate-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

localStorage.setItem("selectedCharity","Donation Submitted");

});

});




// ================= AUTO NOTIFICATION =================

setTimeout(()=>{

showPopup("🎉 New Verified Charities Added");

},5000);

