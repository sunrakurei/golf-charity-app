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

showPopup("Welcome to User Management");

},1000);

});




// ================= SEARCH =================

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value=searchInput.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)
?"table-row":"none";

});

});

}




// ================= COUNTER ANIMATION =================

document.querySelectorAll(".stat-card h2").forEach(counter=>{

let target=parseInt(counter.innerText.replace(/[^0-9]/g,""));

if(isNaN(target)) return;

let count=0;

function update(){

if(count<target){

count+=Math.ceil(target/100);

counter.innerText=count>target?target:count;

requestAnimationFrame(update);

}

}

update();

});




// ================= ADD USER =================

const addBtn=document.querySelector(".add-user-btn");

if(addBtn){

addBtn.addEventListener("click",()=>{

showPopup("Add User Feature Activated");

});

}




// ================= VIEW BUTTON =================

document.querySelectorAll(".view-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Viewing User Details");

});

});




// ================= EDIT BUTTON =================

document.querySelectorAll(".edit-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("Edit User Feature");

});

});




// ================= DELETE BUTTON =================

document.querySelectorAll(".delete-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

let confirmDelete=confirm("Delete this user?");

if(confirmDelete){

btn.closest("tr").remove();

showPopup("User Deleted Successfully");

}

});

});




// ================= APPROVE BUTTON =================

document.querySelectorAll("table button").forEach(btn=>{

if(btn.innerText==="Approve"){

btn.addEventListener("click",()=>{

btn.innerText="Approved";

btn.style.background="#22c55e";

showPopup("Request Approved");

});

}

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

"User Management"

);




// ================= VISIT COUNTER =================

let visits=localStorage.getItem("userPageVisits");

visits=visits?Number(visits)+1:1;

localStorage.setItem("userPageVisits",visits);

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

"User Management | "+

new Date().toLocaleTimeString();

},1000);