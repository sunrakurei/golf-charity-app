
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

showPopup("Welcome to Settings");

},1000);

});




// ================= SAVE SETTINGS =================

const saveBtn=document.querySelector(".save-btn");

if(saveBtn){

saveBtn.addEventListener("click",()=>{

showPopup("Settings Saved Successfully");

});

}




// ================= GENERATE API KEY =================

const generateBtn=document.querySelector(".generate-btn");

if(generateBtn){

generateBtn.addEventListener("click",()=>{

let apiKey="API-"+Math.random().toString(36).substring(2,12);

document.querySelector(
'input[placeholder="API Key"]'
).value=apiKey;

showPopup("API Key Generated");

});

}




// ================= PASSWORD VALIDATION =================

const passwordInputs=document.querySelectorAll(
'input[type="password"]'
);

passwordInputs.forEach(input=>{

input.addEventListener("change",()=>{

showPopup("Password Updated");

});

});




// ================= QUICK ACTION BUTTONS =================

document.querySelectorAll(".quick-actions button")
.forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup(btn.innerText + " Activated");

});

});




// ================= TOGGLE SWITCHES =================

document.querySelectorAll(
'input[type="checkbox"]'
).forEach(toggle=>{

toggle.addEventListener("change",()=>{

showPopup("Preference Updated");

});

});




// ================= LOCAL STORAGE =================

localStorage.setItem(

"lastVisitedPage",

"Settings"

);
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

"Settings | " +

new Date().toLocaleTimeString();

},1000);




// ================= CONSOLE MESSAGE =================

console.log(

"Settings Module Loaded Successfully"

);