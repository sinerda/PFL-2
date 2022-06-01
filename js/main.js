document.getElementById("default-tab").click();

// Функция переключения табов. Привязывается через событие OnClick в HTML
function openTab(evt, IdName) {
  const tabContent = document.getElementsByClassName("about__tab-content-inner");
  const tabLinks = document.getElementsByClassName("about__tab-links");
  const tabOnID = document.getElementById(IdName);

  // Скрытие всех вкладок
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // "Обнуление" активного состояния всех кнопок
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("about__tab-links--active", "");
  }

  // При помощи обращения к элементу по айди-шке нужный таб становится активным
  tabOnID.style.display = "flex";
  // Тут не до конца понятно КАК работает, но понятно что текущей кнопке присваивается "активный" класс
  evt.currentTarget.className += " about__tab-links--active";


  const Media_585 = window.matchMedia("(max-width: 585px)");
  
  function FlexToBlock(e) {
    if (e.matches) {
      tabOnID.style.display = "block";
    } else {
      tabOnID.style.display = "flex";
    }
  }

  Media_585.addListener(FlexToBlock);
  FlexToBlock(Media_585);
}





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