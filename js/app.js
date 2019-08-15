
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
});
$('.ba-form').on('submit', function(e){
 e.preventDefault();

 let inputEmail = $('#contact-email'),
   inputName = $('#contact-name');
   

 $('.ba-form-error').css('display', 'none');

 let validateEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

 if(!validateEmail.test(inputEmail.val())){
   //alert('incorrect email');
   inputEmail.closest('.flex-form').find('.ba-form-error').css('display', 'block')
 }

 if(inputName.val() === ''){
   inputName.closest('.flex-form').css('display', 'block')
 }

 
});
var tl = new TimelineMax();





tl
    .from($('.letter'), 1.5, {x: -1000})
    .from($('.line'), .5, {height: 0})


str = $(".template-tagline").text().split(''); // берем наш текст и в массив
$(".template-tagline").text(''); // делаем пустой див

$.each(str, function() { // идем по массиву
  // добавляем к диву наши символы в span
  $(".template-tagline").append('<span class="style">' + this + '</span>');
});

str = $(".name-tagline").text().split(''); // берем наш текст и в массив
$(".name-tagline").text(''); // делаем пустой див

$.each(str, function() { // идем по массиву
  // добавляем к диву наши символы в span
  $(".name-tagline").append('<span class="style">' + this + '</span>');
});

str = $(".minim-tagline").text().split(''); // берем наш текст и в массив
$(".minim-tagline").text(''); // делаем пустой див

$.each(str, function() { // идем по массиву
  // добавляем к диву наши символы в span
  $(".minim-tagline").append('<span class="style">' + this + '</span>');
});

str = $(".hello-tagline").text().split(''); // берем наш текст и в массив
$(".hello-tagline").text(''); // делаем пустой див

$.each(str, function() { // идем по массиву
  // добавляем к диву наши символы в span
  $(".hello-tagline").append('<span class="style">' + this + '</span>');
});


var tll = new TimelineMax();

tll.

  staggerFromTo($('.template-tagline .style'), .5, {y:-50, opacity: 0}, {y:0, opacity: 1}, .2)



