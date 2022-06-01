// document.getElementById("default").click();

// function openTab(evt, IdName) {
//   let i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("about__tab-content-inner");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("about__tab-links");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace("about__tab-links--active", "");
//   }

//   document.getElementById(IdName).style.display = "flex";
//   evt.currentTarget.className += " about__tab-links--active";
// }

let ButtonMenu = document.querySelector('.button-burger');
let Menu = document.querySelector('.menu');
ButtonMenu.addEventListener('click', function () {
  Menu.classList.toggle('active');
  ButtonMenu.classList.toggle('active');
})

let Mlink = document.querySelectorAll('.menu__link');
for (let elem of Mlink) {
  elem.addEventListener('click', function () {
    Menu.classList.toggle('active');
    ButtonMenu.classList.toggle('active');
  })
}
let Mbtn = document.querySelectorAll('.menu__btn');
for (let elem of Mbtn) {
  elem.addEventListener('click', function () {
    Menu.classList.toggle('active');
    ButtonMenu.classList.toggle('active');
  })
}


$(function () {
  $('.products-slider').slick({
    variableWidth: true,
    speed: 1800,
    // autoplay: true,
    variableWidth: true,
    nextArrow: '<button class="slick-arrow products-arrow products-next"></button>',
    prevArrow: '<button class="slick-arrow products-arrow products-prev"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          rows: 2
        }
      }
    ]
  });
  $('.reviews-slider').slick({
    speed: 4500,
    // autoplay: true,
    // infinite: false,
    nextArrow: '<button class="slick-arrow reviews-arrow reviews-next"></button>',
    prevArrow: '<button class="slick-arrow reviews-arrow reviews-prev"></button>',
    responsive: [
      {
        breakpoint: 426,
        settings: {
          arrows: false
        }
      }
    ]
  });
})


$(function () {
  $(".slick-next").html("");
  $(".slick-prev").html("");
})


let acc = document.getElementsByClassName("accordion__btn");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordion__btn--active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}