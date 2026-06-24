
function showPopup(message){

const popup = document.createElement("div");

popup.className = "popup";

popup.innerText = message;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},2500);

}



// ================= WELCOME MESSAGE =================

window.addEventListener("load",()=>{

setTimeout(()=>{

showPopup("Welcome to Logout Page");

},1000);

});




// ================= LOGOUT ACCOUNT =================

const logoutBtn = document.querySelector(".logout-btn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

showPopup("Logged Out Successfully");

localStorage.clear();

setTimeout(()=>{

window.location.href="login.html";

},2000);

});

}




// ================= CANCEL BUTTON =================

const cancelBtn = document.querySelector(".cancel-btn");

if(cancelBtn){

cancelBtn.addEventListener("click",()=>{

window.history.back();

});

}




// ================= QUICK ACTIONS =================

document.querySelectorAll(".quick-actions button")
.forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup(btn.innerText + " Activated");

});

});

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
"Logout | " + new Date().toLocaleTimeString();

},1000);




// ================= CONSOLE MESSAGE =================

console.log(

"Logout Module Loaded Successfully"

);