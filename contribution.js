
window.addEventListener("load", () => {

console.log(
"Contribution Calculation Page Loaded"
);

});



// ==========================
// TOTAL CONTRIBUTION
// ==========================

let totalContribution = 125400;

console.log(
"Total Contribution : $" +
totalContribution
);



// ==========================
// MONTHLY CALCULATION
// ==========================

let january = 1200;
let february = 1450;
let march = 1800;
let april = 2200;

let monthlyTotal =
january +
february +
march +
april;

console.log(
"Monthly Total : $" +
monthlyTotal
);



// ==========================
// YEARLY CONTRIBUTION
// ==========================

let contribution2022 = 30000;
let contribution2023 = 55000;
let contribution2024 = 85000;

let yearlyTotal =
contribution2022 +
contribution2023 +
contribution2024;

console.log(
"Yearly Total : $" +
yearlyTotal
);



// ==========================
// TAX CALCULATION
// ==========================

let taxableAmount = 14500;

let taxPercentage = 18;

let taxPayable =
(taxableAmount * taxPercentage)
/100;

console.log(
"Tax Payable : $" +
taxPayable
);



// ==========================
// PLATFORM FEES
// ==========================

let serviceFee = 2;
let processingFee = 1.5;
let maintenanceFee = 0.5;

let totalFees =
serviceFee +
processingFee +
maintenanceFee;

console.log(
"Platform Fees : " +
totalFees + "%"
);



// ==========================
// NET CONTRIBUTION
// ==========================

let netContribution =
totalContribution -
4200;

console.log(
"Net Contribution : $" +
netContribution
);



// ==========================
// FAQ TOGGLE
// ==========================

const faqBoxes =
document.querySelectorAll(".faq-box");

faqBoxes.forEach(box=>{

box.addEventListener("click",()=>{

const answer =
box.querySelector("p");

if(answer.style.display==="none"){

answer.style.display="block";

}
else{

answer.style.display="none";

}

});

});



// ==========================
// SUPPORT CARDS
// ==========================

const supportCards =
document.querySelectorAll(".support-card");

supportCards.forEach(card=>{

card.addEventListener("click",()=>{

alert(
"Opening support service."
);

});

});

let monthlyGrowth = 12;
let quarterlyGrowth = 24;
let annualGrowth = 38;

console.log(
"Monthly Growth : " +
monthlyGrowth + "%"
);

console.log(
"Quarterly Growth : " +
quarterlyGrowth + "%"
);

console.log(
"Annual Growth : " +
annualGrowth + "%"
);



// ==========================
// STATISTICS
// ==========================

let activeContributors = 18540;

let topContributors = 650;

let averageContribution = 285;

console.log(
"Active Contributors : " +
activeContributors
);

console.log(
"Top Contributors : " +
topContributors
);

console.log(
"Average Contribution : $" +
averageContribution
);



// ==========================
// CONTRIBUTION HISTORY
// ==========================

const contributionHistory = [

{
date:"10 Jul 2025",
amount:250
},

{
date:"15 Jul 2025",
amount:500
},

{
date:"18 Jul 2025",
amount:800
},

{
date:"21 Jul 2025",
amount:350
}

];

console.log(
"History Records : ",
contributionHistory
);



// ==========================
// SAVINGS PROJECTION
// ==========================

let projection6Months = 150000;

let projection1Year = 300000;

let projection3Years = 900000;

console.log(
"6 Months Projection : $" +
projection6Months
);

console.log(
"1 Year Projection : $" +
projection1Year
);

console.log(
"3 Years Projection : $" +
projection3Years
);



// ==========================
// PROJECTION CALCULATOR
// ==========================

function calculateProjection(
amount,
years
){

return amount * years;

}

console.log(
calculateProjection(
300000,
3
)
);



// ==========================
// ALERT FUNCTION
// ==========================

function showAlert(message){

alert(message);

}



// ==========================
// SUPPORT ACTION
// ==========================

function contactSupport(){

showAlert(
"Connecting with support..."
);

}



// ==========================
// AUTO REFRESH
// ==========================

setInterval(()=>{

console.log(
"Refreshing contribution statistics..."
);

},30000);



// ==========================
// PAGE STATUS
// ==========================

window.addEventListener(
"focus",
()=>{

console.log(
"Contribution page active."
);

});