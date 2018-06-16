// featured portfolio slider
( ( $ ) => {

  $( document.getElementById( 'js-homepage-slider' ) ).slick( {
    arrows: false,
    autoplay: true,
    centerMode: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ],
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
  } );

  document.getElementById( 'js-homepage-slider' ).style.opacity = 0;

  setTimeout( () => {
    document.getElementById( 'js-homepage-slider' ).style.opacity = 1;
  }, 800 );

} )( jQuery );
