'use strict';

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Funktion til at aktivere side
function activatePage(pageName) {
  pages.forEach(page => {
    if (page.dataset.page === pageName) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  navigationLinks.forEach(navLink => {
    if (navLink.dataset.page === pageName || navLink.innerText.toLowerCase() === pageName) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });

  window.scrollTo(0, 0);
}

// Tilføj eventlistener til ALLE nav-links inkl. knappen med data-nav-link
navigationLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Hent data-page attribut hvis den findes, ellers brug link tekst
    const pageName = link.dataset.page ? link.dataset.page.toLowerCase() : link.innerText.toLowerCase();
    activatePage(pageName);
  });
});



// Clietns/Projekter Modals

 const modal = document.getElementById('textModal');
  const modalText = document.getElementById('modalText');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const text = link.getAttribute('data-text');
      modalText.textContent = text;
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });






