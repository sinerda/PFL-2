// function openTab(evt, IdName) {
//   // Declare all variables
//   let i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("about__tab-content-inner");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("about__tab-links");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(IdName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
$(function () {
  $('.products-slider').slick({
    variableWidth: true,
    speed: 2600,
    autoplay: true,
  });
})


$(function () {
  $(".slick-next").html("");
  $(".slick-prev").html("");
})
