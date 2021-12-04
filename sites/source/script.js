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
    nextEl: '.swiper-button-next15',
    prevEl: '.swiper-button-prev15',
  },
});
// const swiper2 = new Swiper(".swiper2", {
//   autoHeight: true,
//   autoWidth: true,
//   // Optional parameters
//   loop: true,
//   speed: 100,
//   // Navigation arrows
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   // navigation: {
//   //   nextEl: ".swiper-button-next2",
//   //   prevEl: ".swiper-button-prev2",
//   // },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// const swiper = new Swiper(".swiper", {
//   autoHeight: true,
//   autoWidth: true,
//   // Optional parameters
//   loop: true,
//   speed: 100,
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const swiper3 = new Swiper(".swiper3", {
//   autoHeight: true,
//   autoWidth: true,
//   // Optional parameters
//   loop: true,
//   speed: 100,
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next3",
//     prevEl: ".swiper-button-prev3",
//   },
// });


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

  const btnTab = document.getElementById("");
  if (document.getElementById("defaultOpenServices")) {
    document.getElementById("defaultOpenServices").click();
  }

  if (document.getElementById("defaultOpenMob")) {
    document.getElementById("defaultOpenMob").click();
  }
})();

function openPage(pageName, elmnt) {
  let i, tabcontent, tablinks;
  console.log(elmnt);
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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
