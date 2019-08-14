
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
$('.ba-form').on('submit', function (e) {
    e.preventDefault();
    let inputs = $(this).find('[data-valid]');
    console.log(inputs);
    let isValid = true;
    inputs.each(function(input) {
        isValid = validate.call(this);
    })
    isValid != false ? isValid = true : isValid =false;
    console.log('submit valid - ' + isValid);
});

let validate = function(){
  let inputData = $(this).data('valid').split(' '),
    inputValue = $(this).val();

  let validateStatus = true;

  inputData.forEach(element => {

    switch (element) {
      case 'required':
      validateStatus = validRequired(inputValue);
      break;
      case 'email':
      validateStatus = validEmail(inputValue);
      break;
      default:
      break;
    }
  });
  return validateStatus;
}





$('[data-valid]').on('change', validate)
let validRequired = function (value) {
    if (value != '') {
        
    } else {
        console.log('This field is required');

        return false
    }
}
let validEmail = function (value) {
    let validateEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!validateEmail.test(value)) {
        console.log('Email is invalid');
        return false
    }
};

var tl = new TimelineMax();

tl
    .from($('.letter'), 1.5, {x: -1000})
    .from($('.line'), .5, {y: -1000})