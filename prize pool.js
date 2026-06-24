
let totalPool = 10000;

// Prize Distribution

let jackpotPrize = totalPool * 0.40;
let secondPrize = totalPool * 0.25;
let thirdPrize = totalPool * 0.15;
let charityContribution = totalPool * 0.10;
let reserveFund = totalPool * 0.10;


// ==========================
// UPDATE AMOUNTS
// ==========================

function updatePrizePool(){

document.getElementById("totalPool").innerHTML =
"$" + totalPool.toLocaleString();

document.getElementById("jackpotAmount").innerHTML =
"$" + jackpotPrize.toLocaleString();

document.getElementById("secondAmount").innerHTML =
"$" + secondPrize.toLocaleString();

document.getElementById("thirdAmount").innerHTML =
"$" + thirdPrize.toLocaleString();

document.getElementById("charityAmount").innerHTML =
"$" + charityContribution.toLocaleString();

document.getElementById("reserveAmount").innerHTML =
"$" + reserveFund.toLocaleString();

}


// ==========================
// REFRESH POOL
// ==========================

let refreshBtn = document.getElementById("refreshPool");

if(refreshBtn){

refreshBtn.addEventListener("click",()=>{

alert("Prize Pool Updated Successfully");

updatePrizePool();

});

}


// ==========================
// DOWNLOAD REPORT
// ==========================

let downloadBtn = document.getElementById("downloadReport");

if(downloadBtn){

downloadBtn.addEventListener("click",()=>{

alert("Monthly Report Download Started");

});

}


// ==========================
// EXPORT DATA
// ==========================

let exportBtn = document.getElementById("exportData");

if(exportBtn){

exportBtn.addEventListener("click",()=>{

alert("Prize Pool Data Exported");

});

}


// ==========================
// VIEW HISTORY
// ==========================

let historyBtn = document.getElementById("viewHistory");

if(historyBtn){

historyBtn.addEventListener("click",()=>{

alert("Opening Prize History");

});

}


// ==========================
// INITIAL LOAD
// ==========================

updatePrizePool();

localStorage.setItem("totalPrizePool", totalPool);



// ==========================
// RECENT ACTIVITY LOGGER
// ==========================

function addActivity(message){

console.log("Activity :", message);

}

addActivity("Prize Pool Loaded");



// ==========================
// AUTO UPDATE POOL
// ==========================

setInterval(()=>{

console.log("Checking Prize Pool Status...");

},10000);



// ==========================
// RESET PRIZE POOL
// ==========================

function resetPool(){

totalPool = 10000;

jackpotPrize = totalPool * 0.40;
secondPrize = totalPool * 0.25;
thirdPrize = totalPool * 0.15;
charityContribution = totalPool * 0.10;
reserveFund = totalPool * 0.10;

updatePrizePool();

alert("Prize Pool Reset Successfully");

}



// ==========================
// PRINT REPORT
// ==========================

function printReport(){

window.print();

}






// ==========================
// COPY DATA
// ==========================

function copyPoolData(){

let text =

"Total Pool : $" + totalPool +
"\nJackpot : $" + jackpotPrize +
"\nSecond Prize : $" + secondPrize +
"\nThird Prize : $" + thirdPrize +
"\nCharity : $" + charityContribution +
"\nReserve : $" + reserveFund;

navigator.clipboard.writeText(text);

alert("Prize Pool Data Copied");

}



// ==========================
// MONTHLY STATISTICS
// ==========================

let monthlyDistributed = 250000;

console.log(

"Monthly Distribution : $" +

monthlyDistributed

);



// ==========================
// POPUP NOTIFICATION
// ==========================

function showNotification(msg){

alert(msg);

}

showNotification(

"Prize Pool System Loaded Successfully"

);



// ==========================
// SCROLL TO TOP
// ==========================

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

console.log("Scroll Active");

}

});



// ==========================
// PAGE LOADED
// ==========================

window.onload = ()=>{

updatePrizePool();

console.log(

"Prize Pool Module Ready"

);

};