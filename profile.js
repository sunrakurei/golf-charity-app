
const editBtn = document.querySelector(".primary-btn");

if (editBtn) {

editBtn.addEventListener("click", () => {

showPopup("✏️ Edit Profile feature coming soon");

});

}



// ================= SETTINGS BUTTON =================

const settingsBtn = document.querySelector(".secondary-btn");

if (settingsBtn) {

settingsBtn.addEventListener("click", () => {

showPopup("⚙️ Settings opened");

});

}



// ================= UPGRADE MEMBERSHIP =================

const upgradeBtn = document.querySelector(".upgrade-btn");

if (upgradeBtn) {

upgradeBtn.addEventListener("click", () => {

showPopup("⭐ Membership Upgrade Request Submitted");

localStorage.setItem("membership", "Upgrade Requested");

});

}



// ================= SECURITY BUTTONS =================

document.querySelectorAll(".security-card button").forEach(btn => {

btn.addEventListener("click", () => {

showPopup(btn.innerText + " feature selected");

});

});




// ================= NEWSLETTER =================

const newsletterBtn = document.querySelector(".newsletter button");

if (newsletterBtn) {

newsletterBtn.addEventListener("click", () => {

const email = document.querySelector(".newsletter input").value;

if (email === "") {

showPopup("⚠️ Please enter your email");

}

else {

showPopup("✅ Subscription successful");

localStorage.setItem("subscriberEmail", email);

}

});

}



// ================= POPUP FUNCTION =================

function showPopup(message) {

const popup = document.createElement("div");

popup.className = "popup";

popup.innerHTML = message;

document.body.appendChild(popup);

setTimeout(() => {

popup.remove();

}, 3000);

}



// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

let target = parseInt(counter.innerText.replace(/[^0-9]/g, ""));

if (isNaN(target)) return;

let count = 0;

let speed = target / 100;

function updateCounter() {

if (count < target) {

count += speed;

counter.innerText = Math.floor(count);

requestAnimationFrame(updateCounter);

}

else {

counter.innerText = target;

}

}

updateCounter();

});




// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".stat-card,.info-card,.account-card,.history-card,.achievement-card,.activity-card,.security-card,.favorite-card,.faq-item"

).forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});




// ================= AUTO NOTIFICATION =================

setTimeout(() => {

showPopup("🎉 Welcome back to CharityWin!");

}, 4000);





// ================= SAVE LAST PAGE =================

localStorage.setItem("lastVisitedPage", "Profile");



// ================= PROFILE IMAGE CLICK =================

const profileImage = document.querySelector(".profile-image");

if (profileImage) {

profileImage.addEventListener("click", () => {

showPopup("📸 Profile picture update feature coming soon");

});

}