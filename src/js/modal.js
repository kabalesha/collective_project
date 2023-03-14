(() => {
    const refs = {
      modal: document.querySelector('[data-modal]'),
      modalSnd: document.querySelector('[data-modal-send]'),
      modalSndFrm: document.querySelector('[data-modal-send-form]'),
      modalThnks: document.querySelector('[data-modal-thnx]'),
      openModalSbscrBtn: document.querySelector('[data-modal-sbscr-open]'),
      closeModalSbscrBtn: document.querySelector('[data-modal-sbscr-close]'),
      modalSbscr: document.querySelector('[data-modal-sbscr]'),
    };
    var openModalSendBtn = document.querySelectorAll("[data-modal-open]");
    for (var i = 0; i < openModalSendBtn.length; i++) {
      openModalSendBtn[i].addEventListener('click', toggleModal);
    };
    var closeModalSendBtn = document.querySelectorAll("[data-modal-close]");
    for (var i = 0; i < closeModalSendBtn.length; i++) {
      closeModalSendBtn[i].addEventListener('click', toggleModal);
    };
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
  };

  refs.modalSndFrm.addEventListener('submit', function (event) {
    event.preventDefault();
    refs.modalSnd.classList.toggle('is-hidden');
    refs.modalThnks.classList.toggle('is-hidden'); 
  });
  
  var closeModalThnksBtn = document.querySelectorAll("[data-modal-thnx-close]");
    for (var i = 0; i < closeModalThnksBtn.length; i++) {
     closeModalThnksBtn[i].addEventListener('click', toggleModalThnks);
  }; 

  function toggleModalThnks() {
     refs.modalSndFrm.submit();
  }
  
  refs.openModalSbscrBtn.addEventListener('click', toggleModalSbscr);
  refs.closeModalSbscrBtn.addEventListener('click', toggleModalSbscr);

  function toggleModalSbscr() {
      refs.modalSbscr.classList.toggle('is-hidden');
  }
  })(); 