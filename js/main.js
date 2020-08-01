$(document).ready(function() {


 $('.results__inner').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 544,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
 });



 $('.reviews__inner').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
 });



 $('.uniq__wrapper').slick({
   slidesToShow: 6,
   slidesToScroll: 6,
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
      centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 544,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });



});