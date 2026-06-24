
function showPopup(message){

const popup=document.createElement("div");

popup.className="popup";

popup.innerText=message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3000);

}



// ================= WELCOME =================

window.addEventListener("load",()=>{

setTimeout(()=>{

showPopup("Welcome to Winner Management");

},1000);

});




// ================= SEARCH =================

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value=searchInput.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)
?"table-row"
:"none";

});

});

}




// ================= COUNTER ANIMATION =================

document.querySelectorAll(".stat-card h2").forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

function updateCounter(){

if(count<target){

count+=Math.ceil(target/100);

counter.innerText=count>target?target:count;

requestAnimationFrame(updateCounter);

}

}

updateCounter();

});




// ================= ADD WINNER =================

const addWinner=document.querySelector(".add-winner-btn");

if(addWinner){

addWinner.addEventListener("click",()=>{

showPopup("Add Winner Feature Activated");

});

}




// ================= VIEW BUTTON =================

document.querySelectorAll(".view-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Viewing Winner Details");

});

});




// ================= APPROVE BUTTON =================

document.querySelectorAll(".approve-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Winner Approved");

btn.innerText="Approved";

btn.style.background="#22c55e";

});

});




// ================= REJECT BUTTON =================

document.querySelectorAll(".reject-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Winner Rejected");

btn.innerText="Rejected";

btn.style.background="#ef4444";

});

});




// ================= MARK PAID =================

document.querySelectorAll(".paid-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Payment Completed");

btn.innerText="Paid";

btn.style.background="#22c55e";

});

});




// ================= TABLE ROW HIGHLIGHT =================

document.querySelectorAll("tbody tr").forEach(row=>{

row.addEventListener("click",()=>{

row.style.background="rgba(250,204,21,.08)";

});

});

// ================= LOCAL STORAGE =================

localStorage.setItem(

"lastVisitedPage",

"Winner Management"

);




// ================= PAGE VISITS =================

let visits=localStorage.getItem("winnerVisits");

visits=visits?Number(visits)+1:1;

localStorage.setItem("winnerVisits",visits);

console.log("Visits :",visits);




// ================= SCROLL TO TOP =================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=

window.scrollY>300

?"block"

:"none";

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

"Winner Management | "+

new Date().toLocaleTimeString();

},1000);