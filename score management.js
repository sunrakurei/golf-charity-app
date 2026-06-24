const dateInput = document.querySelector('input[type="date"]');

if(dateInput){

dateInput.valueAsDate = new Date();

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

".stat-card,.activity-item,.achievement-card,.action-card,.analytics-card,.month-card,.opportunity-card,.faq-item,.tip-card"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// ================= COUNTER ANIMATION =================

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=target/100;

function updateCounter(){

if(count<target){

count+=speed;

counter.innerText=Math.floor(count);

requestAnimationFrame(updateCounter);

}

else{

counter.innerText=target;

}

}

if(!isNaN(target)){

updateCounter();

}

});




// ================= FORM VALIDATION =================

const form=document.querySelector(".score-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

showPopup("Score Submitted Successfully ✅");

form.reset();

});

}




// ================= POPUP =================

function showPopup(message){

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3000);

}




// ================= DELETE BUTTON =================

const deleteBtns=document.querySelectorAll(".delete-btn");

deleteBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.closest("tr").remove();

showPopup("Score Deleted Successfully ❌");

});

});




// ================= EDIT BUTTON =================

const editBtns=document.querySelectorAll(".edit-btn");

editBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Edit Feature Activated ✏️");

});

});




// ================= SEARCH =================

const searchInput=document.querySelector(".filter-section input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter=searchInput.value.toUpperCase();

let rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

let text=row.innerText.toUpperCase();

row.style.display=text.includes(filter) ? "" : "none";

});

});

}




// ================= PROGRESS BAR ANIMATION =================

window.addEventListener("load",()=>{

document.querySelectorAll(".progress").forEach(progress=>{

let width=progress.style.width;

progress.style.width="0";

setTimeout(()=>{

progress.style.width=width;

},500);

});

});




// ================= ACTION CARDS =================

document.querySelectorAll(".action-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});




// ================= NOTIFICATION =================

setTimeout(()=>{

showPopup("🎉 Monthly Draw Registration Open!");

},4000);
