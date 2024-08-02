(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-apartment-open]"),
      closeModalBtn: document.querySelector("[data-modal-apartment-close]"),
      modal: document.querySelector("[data-modal-apartment]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();