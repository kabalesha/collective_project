(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      openModalSbscrBtn: document.querySelector('[data-modal-sbscr-open]'),
      closeModalSbscrBtn: document.querySelector('[data-modal-sbscr-close]'),
      modalSbscr: document.querySelector('[data-modal-sbscr]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  }
  refs.openModalSbscrBtn.addEventListener('click', toggleModalSbscr);
  refs.closeModalSbscrBtn.addEventListener('click', toggleModalSbscr);
  function toggleModalSbscr() {
      refs.modalSbscr.classList.toggle('is-hidden');
  }
  })(); 