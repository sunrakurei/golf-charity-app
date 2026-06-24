window.addEventListener("load",()=>{

console.log("Payout Tracking Loaded");

});


// ==========================
// PROGRESS BAR
// ==========================

const progressFill = document.querySelector(".progress-fill");

if(progressFill){

let progress = 0;

const interval = setInterval(()=>{

if(progress>=75){

clearInterval(interval);

}else{

progress++;

progressFill.style.width = progress + "%";
progressFill.innerHTML = progress + "%";

}

},20);

}


// ==========================
// DOWNLOAD BUTTONS
// ==========================

const downloadButtons =
document.querySelectorAll(".download-card button");

downloadButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Your document download will begin shortly.");

});

});


// ==========================
// COPY TRANSACTION ID
// ==========================

const transactionCard =
document.querySelector(".transaction-card h1");

if(transactionCard){

transactionCard.addEventListener("click",()=>{

navigator.clipboard.writeText(transactionCard.innerText);

alert("Transaction ID copied successfully.");

});

}


// ==========================
// NOTIFICATION CARDS
// ==========================

const notificationCards =
document.querySelectorAll(".notification-card");

notificationCards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

});

});


// ==========================
// STATUS BADGE
// ==========================

const badge =
document.querySelector(".status-badge");

if(badge){

badge.innerHTML = "Processing";

badge.style.background = "#22C55E";

}


// ==========================
// TIMELINE ANIMATION
// ==========================

const timelineCards =
document.querySelectorAll(".timeline-card");

timelineCards.forEach((card,index)=>{

setTimeout(()=>{

card.style.opacity="1";
card.style.transform="translateY(0px)";

},index*200);

});


// ==========================
// TABLE HOVER
// ==========================

const rows =
document.querySelectorAll("table tr");

rows.forEach(row=>{

row.addEventListener("mouseover",()=>{

row.style.background="#334155";

});

row.addEventListener("mouseout",()=>{

row.style.background="transparent";

});

});


// ==========================
// SUPPORT CARD EFFECT
// ==========================

const supportCards =
document.querySelectorAll(".support-card");

supportCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ==========================
// AUTO STATUS CHECK
// ==========================

setInterval(()=>{

console.log("Checking payout status...");

},30000);