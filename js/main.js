// Get the element with id="defaultOpen" and click on it
document.getElementById("default").click();


function openTab(evt, IdName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // А мне этот блок совсем и не нужен, хе-хе
  // 
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("about__tab-content-inner");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("about__tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("about__tab-links--active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(IdName).style.display = "flex";
  evt.currentTarget.className += " about__tab-links--active";
}


$(function () {
  $('.products-slider').slick({
    variableWidth: true,
    speed: 1800,
    // autoplay: true,
  });
  $('.reviews-slider').slick({
    speed: 4500,
    // autoplay: true,
    // infinite: false,
    nextArrow: '<button class="slick-arrow reviews-next reviews-arrows"></button>',
    prevArrow: '<button class="slick-arrow reviews-prev reviews-arrows"></button>',
  });
})


$(function () {
  $(".slick-next").html("");
  $(".slick-prev").html("");
})
