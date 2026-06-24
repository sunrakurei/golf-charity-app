// Scroll Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            item.classList.add("active");
        }

    });

});


// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    item.addEventListener("click", () => {

        const answer = item.querySelector("p");

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }else{
            answer.style.display = "block";
        }

    });

});