(function () {
  const accordionBtns = document.querySelectorAll(".accordion");
  const accordionContent = document.getElementsByClassName("accordion-content");
  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");
      let content = this.nextElementSibling;
      let parented = accordion.children[0];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        accordion.style.color = "#333";
        parented.firstChild.src = "img/services/plus.svg";
      } else {
        for (let i = 0; i < accordionContent.length; i++) {
          accordionContent[i].style.maxHeight = null;
          removeIcon();
        }
        content.style.maxHeight = content.scrollHeight + "px";
        scrollToContent(content)
        accordion.style.color = "#828282";
        parented.firstChild.src = "img/services/menos.svg";
      }
    };
  });

  function scrollToContent(content) {
    setTimeout(function(){ 
      content.scrollIntoView({
        behavior: "smooth",
      });
     }, 300);
  }
  
  function removeIcon() {
    for (let i = 0; i < accordionBtns.length; i++) {
      let parented = accordionBtns[i].children[0];
      parented.firstChild.src = "img/services/plus.svg";
    }
  }
})();
