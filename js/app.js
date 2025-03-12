$(document).ready(function(){
  $('.slider-1').slick({
    autoplay: true,        // Automatic Slider Chalay Ga
    autoplaySpeed: 2000,   // 2 Second Bad Slide Change Hogai (Apni Marzi Ka Time Rakhlo)
    infinite: true,        // Slider Repeat Hota Rahay Ga
    slidesToShow: 3,       // Ek Time Me Kitni Images Dikhao (Apni Marzi ka Number Rakhlo)
    slidesToScroll: 1,     // Ek Time Me 1 Image Scroll Hogi
    arrows: false,         // Left-Right Button Chahiye to **true** Kardo
    dots: false             // Niche Wale Dots Show Hogi
  });
});
