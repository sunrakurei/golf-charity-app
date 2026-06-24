window.addEventListener("load", () => {
    setTimeout(() => {
        showPopup("Welcome Back Admin!");
    }, 1000);
});


// ================= POPUP FUNCTION =================

function showPopup(message) {

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.innerText = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);

}


// ================= SEARCH =================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        let value = searchInput.value.toLowerCase();

        document.querySelectorAll(".sidebar ul li").forEach(item => {

            let text = item.innerText.toLowerCase();

            item.style.display = text.includes(value) ? "block" : "none";

        });

    });

}


// ================= COUNTER ANIMATION =================

document.querySelectorAll(".stat-card h2").forEach(counter => {

    let target = parseInt(counter.textContent.replace(/[^0-9]/g, ""));

    if (isNaN(target)) return;

    let count = 0;

    function updateCounter() {

        if (count < target) {

            count += Math.ceil(target / 100);

            counter.innerText = count > target ? target : count;

            requestAnimationFrame(updateCounter);

        }

    }

    updateCounter();

});


// ================= QUICK ACTION BUTTONS =================

document.querySelectorAll(".quick-actions button").forEach(btn => {

    btn.addEventListener("click", () => {

        showPopup(btn.innerText + " Executed");

    });

});


// ================= APPROVE BUTTONS =================

document.querySelectorAll("table button").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerText = "Approved";

        btn.style.background = "#22c55e";

        showPopup("Request Approved");

    });

});


// ================= NOTIFICATION ICON =================

const bell = document.querySelector(".notification-icon");

if (bell) {

    bell.addEventListener("click", () => {

        showPopup("4 New Notifications");

    });

}


// ================= SUPPORT BUTTON =================

const supportBtn = document.querySelector(".analytics-card button");

if (supportBtn) {

    supportBtn.addEventListener("click", () => {

        showPopup("Support Request Sent");

    });

}


// ================= ACTIVE SIDEBAR =================

document.querySelectorAll(".sidebar ul li").forEach(item => {

    item.addEventListener("click", () => {

        document.querySelectorAll(".sidebar ul li")
        .forEach(li => li.classList.remove("active"));

        item.classList.add("active");

    });

});


// ================= LOGOUT CONFIRMATION =================

document.querySelectorAll(".sidebar a").forEach(link => {

    if (link.innerText.includes("Logout")) {

        link.addEventListener("click", (e) => {

            let ok = confirm("Are you sure you want to logout?");

            if (!ok) {

                e.preventDefault();

            }

        });

    }

});


// ================= LOCAL STORAGE =================

localStorage.setItem("lastPage", "Admin Dashboard");


// ================= PAGE VISIT COUNTER =================

let visits = localStorage.getItem("dashboardVisits");

visits = visits ? Number(visits) + 1 : 1;

localStorage.setItem("dashboardVisits", visits);

console.log("Visits:", visits);


// ================= REAL TIME CLOCK =================

setInterval(() => {

    const now = new Date();

    document.title =
        "Admin Dashboard | " +
        now.toLocaleTimeString();

}, 1000);