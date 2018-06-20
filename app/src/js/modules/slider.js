'use strict';

import $ from '../../vendor/jquery/dist/jquery';

export class Slider {
  constructor() {
    const homepageSlider = document.getElementById( 'js-homepage-slider' );

    $( homepageSlider ).slick( {
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

    homepageSlider.style.opacity = 0;

    setTimeout( () => {
      homepageSlider.style.opacity = 1;
    }, 800 );
  }
}
