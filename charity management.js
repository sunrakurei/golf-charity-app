
function showPopup(message){

const popup = document.createElement("div");

popup.className = "popup";

popup.innerText = message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},3000);

}



// ================= WELCOME POPUP =================

window.addEventListener("load",()=>{

setTimeout(()=>{

showPopup("Welcome to Charity Management");

},1000);

});




// ================= SEARCH CHARITY =================

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




// ================= ADD CHARITY =================

const addBtn = document.querySelector(".add-charity-btn");

if(addBtn){

addBtn.addEventListener("click",()=>{

showPopup("New Charity Added");

});

}




// ================= VIEW BUTTON =================

document.querySelectorAll(".view-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Opening Charity Details");

});

});




// ================= EDIT BUTTON =================

document.querySelectorAll(".edit-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Edit Charity");

});

});




// ================= DELETE BUTTON =================

document.querySelectorAll(".delete-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

let confirmDelete = confirm("Delete this charity?");

if(confirmDelete){

showPopup("Charity Deleted");

}

});

});




// ================= APPROVE BUTTON =================

document.querySelectorAll(".approve-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Charity Approved");

btn.innerText = "Approved";

});

});




// ================= REJECT BUTTON =================

document.querySelectorAll(".reject-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Charity Rejected");

btn.innerText = "Rejected";

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

"Charity Management"

);




// ================= VISIT COUNTER =================

let visits = localStorage.getItem("charityPageVisits");

visits = visits ? Number(visits)+1 : 1;

localStorage.setItem("charityPageVisits",visits);

console.log("Visits :",visits);

// ================= SCROLL TO TOP =================

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




// ================= REAL-TIME CLOCK =================

setInterval(()=>{

document.title =
"Charity Management | " +
new Date().toLocaleTimeString();

},1000);