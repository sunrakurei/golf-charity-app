window.addEventListener("load", () => {
    console.log("Subscription page loaded");
    showToast("Welcome to CharityWin Subscription");
});

let currentPlan = "Premium Monthly";

function showToast(message) {
    alert(message);
}

const monthlyButtons =
document.querySelectorAll(".plan-card button").forEach(button => {

button.onclick = function(){

const plan =
this.parentElement.querySelector("h3").innerText;

alert(plan + " selected successfully");

purchaseSubscription(plan);

};

});
    

const yearlyButtons =
document.querySelectorAll(".yearly-card button");

yearlyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const plan =
        button.parentElement.querySelector("h3").innerText;

        currentPlan = plan;

        alert(
            plan +
            " selected successfully."
        );
         alert(
plan +
" selected successfully."
);

purchaseSubscription(plan);

    });

});

const upgradeButtons =
document.querySelectorAll(".upgrade-card button");

upgradeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const plan =
        button.parentElement.querySelector("h3").innerText;

        alert(
            "Upgraded successfully to " +
            plan
        );

    });

});

const downgradeButtons =
document.querySelectorAll(".downgrade-card button");

downgradeButtons.forEach(button => {

    button.addEventListener("click", () => {

        let confirmDowngrade =
        confirm(
            "Are you sure you want to downgrade?"
        );

        if(confirmDowngrade){

            alert(
                "Membership downgraded successfully."
            );

        }

    });

});

const paymentCards =
document.querySelectorAll(".payment-card");

paymentCards.forEach(card => {

    card.addEventListener("click", () => {

        const method =
        card.querySelector("h3").innerText;

        alert(
            method +
            " selected as payment method."
        );

    });

});

const supportCards =
document.querySelectorAll(".support-card");

supportCards.forEach(card => {

    card.addEventListener("click", () => {

        const supportType =
        card.querySelector("h3").innerText;

        alert(
            "Opening " +
            supportType
        );

    });

});

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {

    box.addEventListener("click", () => {

        let answer = box.querySelector("p");

        if(answer.style.display === "none"){

            answer.style.display = "block";

        }else{

            answer.style.display = "none";

        }

    });

});

const billingCards =
document.querySelectorAll(".billing-card");

billingCards.forEach(card => {

    card.addEventListener("click", () => {

        let title =
        card.querySelector("h3").innerText;

        alert(
            title +
            " details opened."
        );

    });

});

const renewCards =
document.querySelectorAll(".renew-card");

renewCards.forEach(card=>{

card.addEventListener("click",()=>{

alert(
"Auto renewal settings opened."
);

});

});

const trialCards =
document.querySelectorAll(".trial-card");

trialCards.forEach(card=>{

card.addEventListener("click",()=>{

alert(
"7-Day Trial Activated Successfully."
);

});

});

const benefitCards =
document.querySelectorAll(".benefit-card");

benefitCards.forEach(card=>{

card.addEventListener("click",()=>{

let benefit =
card.querySelector("h3").innerText;

alert(
benefit +
" unlocked."
);

});

});

const historyCards =
document.querySelectorAll(".history-card");

historyCards.forEach(card=>{

card.addEventListener("click",()=>{

alert(
"Viewing billing history."
);

});

});

const statisticsCards =
document.querySelectorAll(".statistics-card");

statisticsCards.forEach(card=>{

card.addEventListener("click",()=>{

alert(
"Statistics details opened."
);

});

});

const rewardCards =
document.querySelectorAll(".reward-card");

rewardCards.forEach(card=>{

card.addEventListener("click",()=>{

let reward =
card.querySelector("h3").innerText;

alert(
reward +
" information opened."
);

});

});

const rows =
document.querySelectorAll("table tr");

rows.forEach(row=>{

row.addEventListener("click",()=>{

console.log(
"Comparison row selected."
);

});

});

const profileBtn =
document.querySelector(".profile-btn");

if(profileBtn){

profileBtn.addEventListener("click",()=>{

alert(
"Opening Profile Dashboard."
);

});

}

let activePlan =
localStorage.getItem("activePlan");

if(activePlan){

console.log(
"Current Plan : " +
activePlan
);

}

function savePlan(plan){

localStorage.setItem(
"activePlan",
plan
);

console.log(
plan +
" saved successfully."
);

}

let subscriptionInProgress = false;

function purchaseSubscription(plan){
alert("Function is working: " + plan);

if(subscriptionInProgress){

alert(
"Subscription already processing."
);

return;

}

subscriptionInProgress = true;

setTimeout(()=>{

fetch("http://localhost:5000/api/subscription", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
userId: localStorage.getItem("userId"),
plan: plan
})
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));
savePlan(plan);

alert(
plan +
" activated successfully."
);

subscriptionInProgress = false;

},2000);

}

function paymentFailed(){

alert(
"Payment failed. Please try again."
);

console.error(
"Payment Error"
);

}

window.addEventListener(
"offline",
()=>{

alert(
"Internet connection lost."
);

});

window.addEventListener(
"online",
()=>{

alert(
"Connection restored."
);

});

let sessionTime = 30;

setInterval(()=>{

sessionTime--;

if(sessionTime === 0){

console.warn(
"Session expired."
);

}

},60000);

function notify(message){

console.log(
"Notification : " +
message
);

}

function autoRenew(){

notify(
"Subscription renewed successfully."
);

}

document.addEventListener(
"visibilitychange",
()=>{

if(document.hidden){

console.log(
"User left page."
);

}else{

console.log(
"User returned."
);

}

});

function healthCheck(){

console.log(
"Subscription system healthy."
);

}

healthCheck();

window.addEventListener(
"error",
(error)=>{

console.error(
"System Error : ",
error.message
);

});


window.addEventListener(
"beforeunload",
()=>{

console.log(
"Leaving Subscription Page"
);

});

setInterval(()=>{

console.log(
"Monitoring subscription services..."
);

},30000);

window.addEventListener(
"load",
()=>{

console.log(
"Subscription Module Ready."
);

});