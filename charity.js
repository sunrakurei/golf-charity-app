document.addEventListener("DOMContentLoaded", function () {

  // =======================
  // MODAL FUNCTION (View Details)
  // =======================

  const modal = document.getElementById("charityModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close");

  const charityData = {
    education: {
      title: "Future Scholars Foundation",
      desc: "We provide scholarships, books, and digital learning tools to underprivileged students helping them build a brighter future."
    },
    health: {
      title: "Healthy Lives Initiative",
      desc: "We organize medical camps, health checkups, and provide affordable healthcare access to rural communities."
    },
    environment: {
      title: "Green Earth Mission",
      desc: "Focused on tree plantation, environmental awareness, and climate change initiatives for a sustainable future."
    },
    water: {
      title: "Clean Water Project",
      desc: "Ensuring access to safe drinking water in rural and underserved communities."
    },
    women: {
      title: "Women Empowerment Network",
      desc: "Empowering women through education, skill development, and entrepreneurship programs."
    },
    food: {
      title: "Community Food Bank",
      desc: "Providing meals and food supplies to families facing hunger and poverty."
    }
  };

  window.showDetails = function (type) {
    modal.style.display = "flex";

    modalTitle.innerText = charityData[type].title;
    modalDescription.innerText = charityData[type].desc;
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  // =======================
  // SCROLL ANIMATION FIX (IMPORTANT)
  // =======================

  const elements = document.querySelectorAll(
    ".charity-card, .impact-grid div, .why-grid div, .story-card"
  );

  function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();


  // =======================
  // SEARCH FILTER (basic working)
  // =======================

  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".charity-card");

  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });


  // =======================
  // FILTER BUTTONS (basic category filter)
  // =======================

  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {

      const filter = this.innerText.toLowerCase();

      cards.forEach(card => {

        if (filter === "all") {
          card.style.display = "block";
        }
        else {
          const category = card.querySelector("span").innerText.toLowerCase();

          if (category.includes(filter)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }

      });

    });
  });

});