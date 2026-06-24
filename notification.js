
function showPopup(message){

const popup=document.createElement("div");

popup.className="popup";

popup.innerText=message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},2500);

}



// ================= WELCOME MESSAGE =================

window.addEventListener("load",()=>{

setTimeout(()=>{

showPopup("Welcome to Notifications");

},1000);

});




// ================= SEARCH NOTIFICATIONS =================

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value=searchInput.value.toLowerCase();

document.querySelectorAll(".notification-card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value)

? "flex"

: "none";

});

});

}




// ================= MARK READ =================

document.querySelectorAll(".mark-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerText="Read";

btn.style.background="#64748b";

showPopup("Notification Marked Read");

});

});




// ================= CLEAR ALL =================

const clearBtn=document.querySelector(".clear-btn");

if(clearBtn){

clearBtn.addEventListener("click",()=>{

document.querySelectorAll(".notification-card").forEach(card=>{

card.remove();

});

showPopup("All Notifications Cleared");

});

}




// ================= COUNTER ANIMATION =================

document.querySelectorAll(".stat-card h2").forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

function updateCounter(){

if(count<target){

count+=Math.ceil(target/100);

counter.innerText=count;

requestAnimationFrame(updateCounter);

}
else{

counter.innerText=target;

}

}

updateCounter();

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

"Notifications"

);




// ================= VISIT COUNTER =================

let visits=localStorage.getItem(

"notificationsVisits"

);

visits=visits ? Number(visits)+1 : 1;

localStorage.setItem(

"notificationsVisits",

visits

);

console.log("Visits :",visits);

// ================= SCROLL TO TOP =================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>300

? "block"

: "none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// ================= REAL TIME CLOCK =================

setInterval(()=>{

document.title=

"Notifications | " +

new Date().toLocaleTimeString();

},1000);




// ================= CONSOLE MESSAGE =================

console.log(

"Notifications Module Loaded Successfully"

);