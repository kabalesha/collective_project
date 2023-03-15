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
      openModalSendBtn[i].addEventListener('click', toggleModalOpen);
    };
    var closeModalSendBtn = document.querySelectorAll("[data-modal-close]");
    for (var i = 0; i < closeModalSendBtn.length; i++) {
      closeModalSendBtn[i].addEventListener('click', toggleModalClose);
    };
  
    function toggleModalOpen() {
      refs.modal.classList.remove('is-hidden');
      document.body.style.overflow = "hidden";
  };
  
  function toggleModalClose() {
      refs.modal.classList.add('is-hidden');
      document.body.style.overflow = "";
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
  
  refs.openModalSbscrBtn.addEventListener('click', toggleModalSbscrOpen);
  refs.closeModalSbscrBtn.addEventListener('click', toggleModalSbscrClose);

  function toggleModalSbscrOpen() {
    refs.modalSbscr.classList.remove('is-hidden');
    document.body.style.overflow = "hidden";
  }
  function toggleModalSbscrClose() {
    refs.modalSbscr.classList.add('is-hidden');
    document.body.style.overflow = "";
  }
  })(); 