
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropdown-btn');
    
    btn.addEventListener('click', () => {
      // Close other dropdowns
      dropdowns.forEach(d => {
        if(d !== drop) d.classList.remove('open');
      });

      // Toggle this dropdown
      drop.classList.toggle('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });


const cards = document.querySelectorAll(".alumni-card");

let index = 0;

// random positions on map
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

showCard(index);
setInterval(() => {
  index = (index + 1) % cards.length;
  showCard(index);
}, 4000);


const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.querySelector(".accordion-header").addEventListener("click", () => {

    // Close all items instantly
    items.forEach(i => i.classList.remove("active"));

    // Open only clicked item
    item.classList.add("active");
  });
});

