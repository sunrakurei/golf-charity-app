
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

showPopup("Welcome to Reports & Analytics");

},1000);

});




// ================= SEARCH REPORTS =================

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

let target = parseInt(counter.innerText.replace(/[^0-9]/g,""));

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




// ================= EXPORT REPORT BUTTON =================

const exportBtn = document.querySelector(".export-btn");

if(exportBtn){

exportBtn.addEventListener("click",()=>{

showPopup("Report Export Started");

});

}




// ================= QUICK ACTIONS =================

document.querySelectorAll(".quick-actions button").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup(btn.innerText + " Opened");

});

});




// ================= LOCAL STORAGE =================

localStorage.setItem(

"lastVisitedPage",

"Reports & Analytics"

);




// ================= VISIT COUNTER =================

let visits = localStorage.getItem("reportsPageVisits");

visits = visits ? Number(visits)+1 : 1;

localStorage.setItem("reportsPageVisits",visits);

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




// ================= REAL TIME CLOCK =================

setInterval(()=>{

document.title =
"Reports & Analytics | " +
new Date().toLocaleTimeString();

},1000);




// ================= CONSOLE MESSAGE =================

console.log(

"Reports & Analytics Module Loaded Successfully"

);