
(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-backdrop-open]"),
      closeMenuBtn: document.querySelector("[data-backdrop-close]"),
      menu: document.querySelector("[data-backdrop]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();