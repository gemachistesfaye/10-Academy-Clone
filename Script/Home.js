/* =========================================================================
   MEGA MENU — FULL WIDTH — CLICK TO OPEN — MATCHES YOUR SCREENSHOTS
   ========================================================================= */
(function(){
  const content = {
    solutions: {
      title: 'Solutions',
      left: [
        { heading: 'for Trainees', text: 'Personalized, job-aligned training in AI, data, and career skills', link: '#' },
        { heading: 'for Universities', text: 'Use our tenx system to deliver job-aligned training with personalized instant grading', link: '#' }
      ],
      right: [
        { heading: 'for Companies', text: 'Upskill your team in AI, data, careers and no-code tools with contextualized training', link: '#' },
        { heading: 'for Funders & Ecosystem Leaders', text: 'Fund scalable, proven workforce development solutions with clear ROI', link: '#' }
      ]
    },

    trainings: {
      title: 'Trainings',
      left: [
        { heading: 'Overview', text: '', link: '#' },
        { heading: 'Intensive Training', text: 'High impact program designed to launch early career professionals into global AI and data careers.', link: '#' },
        { heading: 'University to Jobs (U2J)', text: 'Bridge the gap between academic education and job market expectations', link: '#' }
      ],
      right: [
        { heading: 'KAIM', text: 'Designed to build job-ready AI Engineers to power Ethiopia’s FinTech sector', link: '#' },
        { heading: 'Career Skills Training', text: 'Practical, AI-based course designed to improve digital literacy, communication, and workplace readiness for early professionals.', link: '#' }
      ]
    }
  };

  const overlay = document.getElementById('megaOverlay');
  const card = document.getElementById('megaCard');
  const titleEl = document.getElementById('megaTitle');
  const colLeft = document.getElementById('colLeft');
  const colRight = document.getElementById('colRight');
  const dropdownBtns = document.querySelectorAll('.dropdown .dropdown-btn');

  function renderMenu(menuKey){
    const menu = content[menuKey];
    titleEl.textContent = menu.title;
    colLeft.innerHTML = '';
    colRight.innerHTML = '';

    menu.left.forEach(item => {
      const h = document.createElement('h4');
      h.textContent = item.heading;
      colLeft.appendChild(h);

      if(item.text){
        const p = document.createElement('p');
        p.textContent = item.text;
        colLeft.appendChild(p);
      } else {
        const a = document.createElement('a');
        a.href = item.link || '#';
        a.className = 'mega-link';
        a.textContent = item.heading;
        colLeft.removeChild(h);
        colLeft.appendChild(a);
      }
    });

    menu.right.forEach(item => {
      const h = document.createElement('h4');
      h.textContent = item.heading;
      colRight.appendChild(h);

      if(item.text){
        const p = document.createElement('p');
        p.textContent = item.text;
        colRight.appendChild(p);
      } else {
        const a = document.createElement('a');
        a.href = item.link || '#';
        a.className = 'mega-link';
        a.textContent = item.heading;
        colRight.removeChild(h);
        colRight.appendChild(a);
      }
    });
  }

  function openMenu(menuKey, btn){
    renderMenu(menuKey);

    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    card.classList.add('open');

    dropdownBtns.forEach(b=> b.classList.remove('open'));
    if(btn) btn.classList.add('open');

    dropdownBtns.forEach(b => b.setAttribute('aria-expanded', 'false'));
    if(btn) btn.setAttribute('aria-expanded', 'true');

    overlay.dataset.active = menuKey;
  }

  function closeMenu(){
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Close the currently open menu and reset the UI state.
 * This function removes the "open" class from the card element,
 * removes the "open" class from all dropdown buttons, and
 * sets the aria-expanded attribute to false on all dropdown buttons.
 * It also sets the aria-hidden attribute to true on the overlay element
 * and removes the active menu key from the overlay's dataset.
 * The function is asynchronous and the overlay is hidden after a delay of 220ms.
 */
/*******  563a60c5-4b5f-4e63-8d1f-89e545e4bcf7  *******/    card.classList.remove('open');
    setTimeout(()=>{
      overlay.classList.add('hidden');
      overlay.setAttribute('aria-hidden', 'true');
    }, 220);

    dropdownBtns.forEach(b=> b.classList.remove('open'));
    dropdownBtns.forEach(b => b.setAttribute('aria-expanded', 'false'));
    overlay.dataset.active = '';
  }

  dropdownBtns.forEach(btn=>{
    const parent = btn.parentElement;
    const menuKey = parent.getAttribute('data-menu');

    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const isOpen = btn.classList.contains('open');
      if(isOpen){
        closeMenu();
      } else {
        openMenu(menuKey, btn);
      }
    });

    btn.addEventListener('keydown', ev=>{
      if(ev.key === 'Enter' || ev.key === ' '){
        ev.preventDefault();
        btn.click();
      } else if(ev.key === 'Escape'){
        closeMenu();
        btn.blur();
      }
    });
  });

  document.addEventListener('click', function(e){
    const insideCard = card.contains(e.target);
    const isBtn = Array.from(dropdownBtns).some(b => b.contains(e.target));
    if(!insideCard && !isBtn){
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeMenu();
  });

  overlay.classList.add('hidden');
  overlay.setAttribute('aria-hidden', 'true');
  card.addEventListener('click', e => e.stopPropagation());
})();



/* =========================================================================
   ALUMNI FLOATING CARDS
========================================================================= */
const cards = document.querySelectorAll(".alumni-card");
let index = 0;

const positions = [
  { left: "50%", top: "50%" },
  { left: "25%", top: "40%" },
  { left: "70%", top: "45%" },
  { left: "60%", top: "75%" },
  { left: "40%", top: "70%" },
  { left: "80%", top: "60%" }
];

function showCard(i) {
  cards.forEach(card => card.classList.remove("active"));

  const card = cards[i];
  const pos = positions[Math.floor(Math.random() * positions.length)];

  card.style.left = pos.left;
  card.style.top = pos.top;

  card.classList.add("active");
}

if (cards.length > 0) {
  showCard(index);

  setInterval(() => {
    index = (index + 1) % cards.length;
    showCard(index);
  }, 4000);
}



/* =========================================================================
   ACCORDION
========================================================================= */
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.querySelector(".accordion-header").addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
