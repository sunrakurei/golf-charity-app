// ===============================
// HOPE IMPACT - CHARITY WEBSITE JS
// ===============================


// 1. SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetText = this.textContent.toLowerCase();

        let section = document.querySelector("." + targetText.replace(/\s+/g, "-"));

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// 2. DONATE BUTTON ALERT + COUNTER
let totalDonations = 41200;

document.querySelectorAll("button").forEach(btn => {
    if (btn.textContent.includes("Donate")) {
        btn.addEventListener("click", () => {
            alert("Thank you for your support ❤️");

            totalDonations += 500; // demo increment

            updateCampaign();
        });
    }
});


// 3. UPDATE CAMPAIGN PROGRESS BAR
function updateCampaign() {
    let goal = 50000;
    let percent = (totalDonations / goal) * 100;

    let fill = document.querySelector(".progress .fill");
    let raisedText = document.querySelector(".campaign h3:nth-of-type(2)");

    if (fill) {
        fill.style.width = percent + "%";
    }

    if (raisedText) {
        raisedText.textContent = "Raised Amount : £" + totalDonations;
    }
}


// initialize progress on load
updateCampaign();


// 4. NEWSLETTER VALIDATION
const newsletterBtn = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

if (newsletterBtn) {
    newsletterBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();

        if (email === "" || !email.includes("@")) {
            alert("Please enter a valid email ❌");
        } else {
            alert("Subscribed successfully ✅");
            emailInput.value = "";
        }
    });
}


// 5. FAQ TOGGLE (accordion style)
document.querySelectorAll(".faq-box h3").forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});


// 6. GALLERY MODAL POPUP
const images = document.querySelectorAll(".gallery-container img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.8)";
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
        modal.style.zIndex = "1000";

        const newImg = document.createElement("img");
        newImg.src = img.src;
        newImg.style.maxWidth = "80%";
        newImg.style.maxHeight = "80%";
        newImg.style.borderRadius = "10px";

        modal.appendChild(newImg);
        document.body.appendChild(modal);

        modal.addEventListener("click", () => {
            modal.remove();
        });
    });
});


// 7. ACTIVE NAV LINK HIGHLIGHT
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    document.querySelectorAll("section").forEach(section => {
        if (
            scrollPos >= section.offsetTop - 100 &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(link => link.classList.remove("active"));

            navLinks.forEach(link => {
                if (link.textContent.toLowerCase().includes(section.className)) {
                    link.classList.add("active");
                }
            });
        }
    });
});


// 8. SIMPLE BUTTON ANIMATION EFFECT
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});