
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

showPopup("Email Notification Module Loaded");

});




// ================= SEND EMAIL =================

document.getElementById("sendBtn")

.addEventListener("click",()=>{

const email =
document.getElementById("emailTo").value;

const subject =
document.getElementById("emailSubject").value;

const message =
document.getElementById("emailMessage").value;

if(email==="" || subject==="" || message===""){

showPopup("Please fill all fields");

return;

}

showPopup("Email Sent Successfully");

saveHistory(email,subject);

document.getElementById("emailTo").value="";
document.getElementById("emailSubject").value="";
document.getElementById("emailMessage").value="";

});




// ================= SAVE HISTORY =================

function saveHistory(email,subject){

let history =
JSON.parse(localStorage.getItem("emailHistory"))
|| [];

history.unshift({

email,

subject,

date:new Date().toLocaleDateString(),

status:"Delivered"

});

localStorage.setItem(

"emailHistory",

JSON.stringify(history)

);

renderHistory();

}




// ================= RENDER HISTORY =================

function renderHistory(){

let history =
JSON.parse(localStorage.getItem("emailHistory"))
|| [];

const table =
document.getElementById("emailTable");

table.innerHTML="";

history.forEach(item=>{

table.innerHTML += `

<tr>

<td>${item.email}</td>

<td>${item.subject}</td>

<td>${item.status}</td>

<td>${item.date}</td>

</tr>

`;

});

}




// ================= WINNER ALERT =================

document.getElementById("winnerBtn")

.addEventListener("click",()=>{

showPopup("Winner Alert Sent");

});




// ================= DRAW ALERT =================

document.getElementById("drawBtn")

.addEventListener("click",()=>{

showPopup("Draw Result Notification Sent");

});




// ================= SUBSCRIPTION REMINDER =================

document.getElementById("subscriptionBtn")

.addEventListener("click",()=>{

showPopup("Subscription Reminder Sent");

});




// ================= SEND ALL =================

document.querySelector(".send-all-btn")

.addEventListener("click",()=>{

showPopup("All Notifications Sent");

});

// ================= SCROLL TO TOP =================

const topBtn = document.createElement("button");

topBtn.className = "top-btn";

topBtn.innerHTML = "↑";

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

"Email Notifications | " +

new Date().toLocaleTimeString();

},1000);




// ================= LOAD HISTORY =================

renderHistory();




// ================= CONSOLE =================

console.log(

"Email Notification Module Loaded Successfully"

);