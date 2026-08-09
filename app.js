// Auto-update footer copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Interactive Project Category Filtering
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1. Manage Active Class
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 2. Filter Projects
      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});