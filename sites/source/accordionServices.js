(function () {
  const accordionBtns = document.querySelectorAll(".accordion");

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");
      let content = this.nextElementSibling;
      let parented = accordion.children[0];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        parented.firstChild.src = 'img/services/plus.svg';
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        parented.firstChild.src = 'img/services/menos.svg';
      }
    };
  });
})();
