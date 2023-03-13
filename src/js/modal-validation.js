(() => {
    const submModalBtn = document.querySelector("[data-modal-subm-btn]");
    var fields = document.querySelectorAll("[data-modal-input]");
    for (var i = 0; i < fields.length; i++) {
     fields[i].addEventListener("input", toggleSubmBtn);
  };
  function toggleSubmBtn() {
   
    let field_validation = true;
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].value) {
        if (fields[i].validity.patternMismatch) {
          field_validation = false;
        } 
      } else {
        field_validation = false;
      };
    };
  if (field_validation === true) {
    submModalBtn.disabled = false;
  } else {
    submModalBtn.disabled = true;
  }
  }
 
})();