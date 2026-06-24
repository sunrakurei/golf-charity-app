function showPopup(message) {

const popup = document.createElement("div");

popup.className = "popup";

popup.innerHTML = message;

document.body.appendChild(popup);

setTimeout(() => {

popup.remove();

},3000);

}



// ================= UPGRADE PLAN =================

document.querySelectorAll(".plan-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("⭐ Plan updated successfully");

localStorage.setItem("membershipPlan",btn.parentElement.querySelector("h3").innerText);

});

});




// ================= UPGRADE MEMBERSHIP BUTTON =================

const upgradeBtn=document.querySelector(".upgrade-btn");

if(upgradeBtn){

upgradeBtn.addEventListener("click",()=>{

showPopup("🚀 Redirecting to Premium Plans");

});

}



// ================= COUPON =================

const couponBtn=document.querySelector(".coupon-card button");

if(couponBtn){

couponBtn.addEventListener("click",()=>{

const code=document.querySelector(".coupon-card input").value;

if(code==="SAVE20"){

showPopup("🎉 20% Discount Applied");

}

else{

showPopup("❌ Invalid Coupon");

}

});

}




// ================= INVOICE BUTTONS =================

document.querySelectorAll(".invoice-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showPopup("📄 Invoice Download Started");

});

});




// ================= AUTO RENEWAL =================

document.querySelectorAll(".switch input").forEach(toggle=>{

toggle.addEventListener("change",()=>{

if(toggle.checked){

showPopup("✅ Enabled");

}

else{

showPopup("⚠️ Disabled");

}

});

});




// ================= MANAGE BUTTONS =================

const pauseBtn=document.querySelector(".pause-btn");

const resumeBtn=document.querySelector(".resume-btn");

const cancelBtn=document.querySelector(".cancel-btn");

if(pauseBtn){

pauseBtn.onclick=()=>showPopup("⏸️ Subscription Paused");

}

if(resumeBtn){

resumeBtn.onclick=()=>showPopup("▶️ Subscription Resumed");

}

if(cancelBtn){

cancelBtn.onclick=()=>showPopup("❌ Subscription Cancelled");

}




// ================= NEWSLETTER =================

const newsBtn=document.querySelector(".newsletter button");

if(newsBtn){

newsBtn.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input").value;

if(email===""){

showPopup("⚠️ Enter Email");

}

else{

localStorage.setItem("subscriber",email);

showPopup("✅ Subscribed Successfully");

}

});

}




// ================= SUPPORT BUTTON =================

const supportBtn=document.querySelector(".support-card button");

if(supportBtn){

supportBtn.addEventListener("click",()=>{

showPopup("📞 Support Team Contact Requested");

});

}




// ================= COUNTER ANIMATION =================

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

let target=parseInt(counter.innerText.replace(/[^0-9]/g,""));

if(isNaN(target)) return;

let count=0;

let speed=target/100;

function update(){

if(count<target){

count+=speed;

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

}

update();

});

setTimeout(()=>{

showPopup("🎉 Welcome to Subscription Management");

},2000);




// ================= SAVE PAGE =================

localStorage.setItem("lastVisitedPage","Subscription");