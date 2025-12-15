/* =========================================================
   MEGA MENU — FULL WIDTH — CLICK TO OPEN
========================================================= */
(function () {
  const content = {
    solutions: {
      title: "Solutions",
      left: [
        {
          heading: "for Trainees",
          text: "Personalized, job-aligned training in AI, data, and career skills",
          link: "#"
        },
        {
          heading: "for Universities",
          text: "Use our tenx system to deliver job-aligned training with personalized instant grading",
          link: "#"
        }
      ],
      right: [
        {
          heading: "for Companies",
          text: "Upskill your team in AI, data, careers and no-code tools with contextualized training",
          link: "#"
        },
        {
          heading: "for Funders & Ecosystem Leaders",
          text: "Fund scalable, proven workforce development solutions with clear ROI",
          link: "#"
        }
      ]
    },

    trainings: {
      title: "Trainings",
      left: [
        { heading: "Overview", text: "", link: "#" },
        {
          heading: "Intensive Training",
          text: "High impact program designed to launch early career professionals into global AI and data careers.",
          link: "#"
        },
        {
          heading: "University to Jobs (U2J)",
          text: "Bridge the gap between academic education and job market expectations",
          link: "#"
        }
      ],
      right: [
        {
          heading: "KAIM",
          text: "Designed to build job-ready AI Engineers to power Ethiopia’s FinTech sector",
          link: "#"
        },
        {
          heading: "Career Skills Training",
          text: "Practical, AI-based course designed to improve digital literacy, communication, and workplace readiness for early professionals.",
          link: "#"
        }
      ]
    }
  };

  const overlay = document.getElementById("megaOverlay");
  const card = document.getElementById("megaCard");
  const titleEl = document.getElementById("megaTitle");
  const colLeft = document.getElementById("colLeft");
  const colRight = document.getElementById("colRight");
  const dropdownBtns = document.querySelectorAll(".dropdown .dropdown-btn");

  function renderMenu(menuKey) {
    const menu = content[menuKey];
    titleEl.textContent = menu.title;
    colLeft.innerHTML = "";
    colRight.innerHTML = "";

    function createItem(col, item) {
      const a = document.createElement("a");
      a.href = item.link || "#";
      a.className = "mega-link";
      a.textContent = item.heading;
      col.appendChild(a);

      if (item.text) {
        const p = document.createElement("p");
        p.textContent = item.text;
        col.appendChild(p);
      }
    }

    menu.left.forEach(item => createItem(colLeft, item));
    menu.right.forEach(item => createItem(colRight, item));
  }

  function openMenu(menuKey, btn) {
    renderMenu(menuKey);

    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
    card.classList.add("open");

    dropdownBtns.forEach(b => b.classList.remove("open"));
    if (btn) btn.classList.add("open");

    dropdownBtns.forEach(b => b.setAttribute("aria-expanded", "false"));
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    card.classList.remove("open");
    setTimeout(() => {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
    }, 220);

    dropdownBtns.forEach(b => {
      b.classList.remove("open");
      b.setAttribute("aria-expanded", "false");
    });
  }

  dropdownBtns.forEach(btn => {
    const menuKey = btn.parentElement.getAttribute("data-menu");

    btn.addEventListener("click", e => {
      e.stopPropagation();
      btn.classList.contains("open")
        ? closeMenu()
        : openMenu(menuKey, btn);
    });

    btn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") btn.click();
      if (e.key === "Escape") closeMenu();
    });
  });

  document.addEventListener("click", e => {
    if (!card.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
  card.addEventListener("click", e => e.stopPropagation());
})();

/* =========================================================
   INFINITE SCROLLING GRID
========================================================= */
const grid = document.getElementById("infiniteGrid");
if (grid) {
  grid.innerHTML += grid.innerHTML;
}

/* =========================================================
   ALUMNI FLOATING CARDS — ROTATE + PAUSE ON HOVER
========================================================= */
const alumniCards = document.querySelectorAll(".alumni-card");
let alumniIndex = 0;
let alumniPaused = false;

const alumniPositions = [
  { left: "50%", top: "50%" },
  { left: "25%", top: "40%" },
  { left: "70%", top: "45%" },
  { left: "60%", top: "75%" },
  { left: "40%", top: "70%" },
  { left: "80%", top: "60%" }
];

function showAlumniCard(index) {
  alumniCards.forEach(card => card.classList.remove("active"));

  const card = alumniCards[index];
  const pos =
    alumniPositions[Math.floor(Math.random() * alumniPositions.length)];

  card.style.left = pos.left;
  card.style.top = pos.top;
  card.classList.add("active");
}

// Pause on hover
alumniCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    alumniPaused = true;
  });

  card.addEventListener("mouseleave", () => {
    alumniPaused = false;
  });
});

// Auto rotation
if (alumniCards.length > 0) {
  showAlumniCard(alumniIndex);

  setInterval(() => {
    if (!alumniPaused) {
      alumniIndex = (alumniIndex + 1) % alumniCards.length;
      showAlumniCard(alumniIndex);
    }
  }, 4000);
}

/* =========================================================
   ACCORDION — CLICK TO OPEN/CLOSE
========================================================= */
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");
  const symbol = item.querySelector(".symbol");

  header.addEventListener("click", () => {
    accordionItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
      i.querySelector(".symbol").textContent = "+";
    });

    item.classList.toggle("active");
    symbol.textContent = item.classList.contains("active") ? "×" : "+";
  });
});
