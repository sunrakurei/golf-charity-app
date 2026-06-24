
function showPopup(message){

const popup = document.createElement("div");

popup.className = "popup";

popup.innerText = message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3000);

}



// ================= WELCOME MESSAGE =================

window.addEventListener("load",()=>{

setTimeout(()=>{

showPopup("Welcome to Draw Management");

},1000);

});




// ================= SEARCH =================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value = searchInput.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{

row.style.display = row.innerText.toLowerCase().includes(value)
? "table-row"
: "none";

});

});

}




// ================= COUNTER ANIMATION =================

document.querySelectorAll(".stat-card h2").forEach(counter=>{

let target = parseInt(counter.innerText);

let count = 0;

function updateCounter(){

if(count < target){

count += Math.ceil(target/100);

counter.innerText = count;

requestAnimationFrame(updateCounter);

}

else{

counter.innerText = target;

}

}

updateCounter();

});




// ================= CREATE DRAW =================

const createBtn = document.querySelector(".create-draw-btn");

if(createBtn){

createBtn.addEventListener("click",()=>{

showPopup("New Draw Created");

});

}




// ================= RUN BUTTON =================

document.querySelectorAll(".run-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Simulation Started");

btn.innerText="Running";

});

});




// ================= PUBLISH BUTTON =================

document.querySelectorAll(".publish-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Results Published");

btn.innerText="Published";

});

});




// ================= CANCEL BUTTON =================

document.querySelectorAll(".cancel-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

let confirmCancel = confirm("Cancel this draw?");

if(confirmCancel){

btn.innerText = "Cancelled";

btn.style.background = "#ef4444";

showPopup("Draw Cancelled");

}

});

});




// ================= VIEW BUTTON =================

document.querySelectorAll(".view-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Opening Draw Details");

});

});




// ================= EDIT BUTTON =================

document.querySelectorAll(".edit-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Edit Draw Feature");

});

});




// ================= QUICK ACTIONS =================

document.querySelectorAll(".quick-actions button").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup(btn.innerText + " Activated");

});

});




// ================= LOCAL STORAGE =================

localStorage.setItem(

"lastVisitedPage",

"Draw Management"

);




// ================= VISIT COUNTER =================

let visits = localStorage.getItem("drawPageVisits");

visits = visits ? Number(visits)+1 : 1;

localStorage.setItem("drawPageVisits",visits);

console.log("Visits :",visits);




// ================= SCROLL TOP BUTTON =================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display =

window.scrollY > 300

? "block"

: "none";

});

topBtn.onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// ================= REAL TIME CLOCK =================

setInterval(()=>{

document.title =

"Draw Management | " +

new Date().toLocaleTimeString();

},1000);