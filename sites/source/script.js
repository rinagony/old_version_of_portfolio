const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  spaceBetween: 20,
  autoHeight: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});

const swiper4 = new Swiper(".swiper4", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
});

const swiper5 = new Swiper(".swiper5", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
});

const swiper7 = new Swiper(".swiper7", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
  },
});

const swiper8 = new Swiper(".swiper8", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination8",
    clickable: true,
  },
});

const swiper9 = new Swiper(".swiper9", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination9",
    clickable: true,
  },
});

const swiper10 = new Swiper(".swiper10", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination10",
    clickable: true,
  },
});

const swiper11 = new Swiper(".swiper11", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination11",
    clickable: true,
  },
});

const swiper12 = new Swiper(".swiper12", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination12",
    clickable: true,
  },
});

const swiper13 = new Swiper(".swiper13", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination13",
    clickable: true,
  },
});

const swiper14 = new Swiper(".swiper14", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination14",
    clickable: true,
  },
});

const swiper15 = new Swiper(".swiper15", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination15",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next15",
    prevEl: ".swiper-button-prev15",
  },
});

// $(function () {
//   $('.wrapperMenuPages a').each(function () {
//       var location = window.location.href;
//       var link = this.href;
//       if (location == link) {
//           $(this).addClass('activeLinkMenuPages');
//       }
//   });
// });

(function () {
  const header = document.querySelector(".headerMob");
  const icon = document.querySelector(".icon-container");
  icon.onclick = function () {
    header.classList.toggle("menu-open");
  };

  var hash = window.location.hash;
  if (hash == "#defaultOpenServices") {
    document.querySelector(hash).click();
  } else if (hash == "#secondOpenServices") {
    document.querySelector(hash).click();
  } else if (hash == "#thirdOpenServices") {
    document.querySelector(hash).click();
  } else if (hash == "#fourthOpenServices") {
    document.querySelector(hash).click();
  } else if (hash == "#fifthOpenServices") {
    document.querySelector(hash).click();
  } else if (hash == "#defaultOpenServicesOne") {
    document.getElementById("defaultOpenServices").click();
    let element = document.getElementById("defaultOpenServicesOne");
    accordeonMode(element);
  } else if (hash == "#defaultOpenServicesTwo") {
    document.getElementById("defaultOpenServices").click();
    let element = document.getElementById("defaultOpenServicesTwo");
    accordeonMode(element);
  } else if (hash == "#defaultOpenServicesThree") {
    document.getElementById("defaultOpenServices").click();
    let element = document.getElementById("defaultOpenServicesThree");
    accordeonMode(element);
  } else if (hash == "#defaultOpenServicesFour") {
    document.getElementById("defaultOpenServices").click();
    let element = document.getElementById("defaultOpenServicesFour");
    accordeonMode(element);
  } else if (hash == "#defaultOpenServicesFive") {
    document.getElementById("defaultOpenServices").click();
    let element = document.getElementById("defaultOpenServicesFive");
    accordeonMode(element);
  } else if (hash == "#defaultOpenServicesSix") {
    document.getElementById("defaultOpenServices").click();
    let element = document.getElementById("defaultOpenServicesSix");
    accordeonMode(element);
  } else {
    document.getElementById("defaultOpenServices").click();
  }

  if (document.getElementById("defaultOpenMob")) {
    document.getElementById("defaultOpenMob").click();
  }
})();

function accordeonMode(element) {
  const accordionContent = document.getElementsByClassName("accordion-content");
  const accordionBtns = document.querySelectorAll(".accordion");
  element.onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;
    let parented = element.children[0];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      element.style.color = "#333";
      parented.firstChild.src = "img/services/plus.svg";
    } else {
      for (let i = 0; i < accordionContent.length; i++) {
        accordionContent[i].style.maxHeight = null;
        removeIcon();
      }
      content.style.maxHeight = content.scrollHeight + "px";
      content.scrollIntoView({ behavior: "smooth", block: "start" });
      element.style.color = "#828282";
      parented.firstChild.src = "img/services/menos.svg";
    }
  };

  function removeIcon() {
    for (let i = 0; i < accordionBtns.length; i++) {
      let parented = accordionBtns[i].children[0];
      parented.firstChild.src = "img/services/plus.svg";
    }
  }
  element.click();
}

function openPage(pageName, elmnt) {
  let titleMain = document.getElementById("titleServicesMain");
  let shrimp = document.getElementById("lastShrimpBread");
  let imageBg = document.getElementById("navigationServicesImageItem");
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "#222222";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.color = "#828282";
  titleMain.innerHTML = elmnt.innerHTML;
  shrimp.innerHTML = elmnt.innerHTML;

  let imagepathbg = elmnt.getAttribute("data-image");
  imageBg.style.background = `url('img/works/${imagepathbg}')`;

  imageBg.style.backgroundSize = "cover";
  imageBg.style.backgroundRepeat = "no-repeat";
}

if (window.innerWidth > 768) {
  if (document.getElementById("defaultOpen")) {
    document.getElementById("defaultOpen").click();
  }
} else {
  if (document.getElementById("defaultOpenMob")) {
    document.getElementById("defaultOpenMob").click();
  }
}

const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const blockID = anchor.getAttribute("href").substr(1);

//     document.getElementById(blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }
