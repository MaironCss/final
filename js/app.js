
$('.ba-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  cssEase: 'linear',
   adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.ba-carusel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
    adaptiveHeight: true,
     responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]

});
				

$('.btn-menu').on('click', function(){

  $('.nav-menu').toggleClass('active');

})

$('.menu a').on('click', function(e){
  // e.preventDefault();
  $('.nav-menu').removeClass('active');
})
