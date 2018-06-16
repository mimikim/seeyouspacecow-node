// trek badge and cards animation
// using jquery for anime.js library
( ( $ ) => {
  "use strict";

  let body = document.body,
    header = document.getElementById('js-header');

  if (!body.classList.contains('about')) {
    return false;
  }

  let animate_badge = () => {
    let badge = document.querySelector( '#space-trek #Badge' );
    let timeline = anime.timeline();

    anime.timeline().add( [

      {
        targets: '.card-container .card',
        translateY: [ -150, 0 ],
        opacity: [ 0, 1 ],
        duration: function(el, i, l) {
          return 2000 + (i * 1000);
        },
        delay: 900
      }

    ] );

    timeline.add( [
      {
        targets: badge,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 600
      }, {
        targets: badge,
        easing: 'easeOutCirc',
        fill: '#CCD1D4',
        fillOpacity: [ 0, 1 ],
        duration: 300
      }, {
        targets: document.querySelector( '#space-trek #highlight' ),
        easing: [0.000, 1.485, 0.710, 0.665],
        opacity: [ 0, 1 ],
        duration: 400
      }, {
        targets: document.querySelector( '#space-trek #cow-head' ),
        easing: 'easeOutCubic',
        opacity: [ 0, 1 ],
        duration: 300,
        complete: () => {
          let closed_eyes = document.querySelector( '#space-trek #closed-eyes' );
          let opened_eyes = document.querySelector( '#space-trek #eyes' );

          opened_eyes.classList.add( 'hidden' );
          closed_eyes.classList.add( 'show' );

          setTimeout( () => {
            opened_eyes.classList.remove( 'hidden' );
            closed_eyes.classList.remove( 'show' );
          }, 1250 );
        }
      }, {
      targets: document.getElementById( 'space-trek' ),
        easing: 'linear',
        rotateY: [ 0, 360, 0 ],
        duration: 500
      }
    ] );
  };

  $ ( document ).ready( function() {
    animate_badge();
  } );

} )( jQuery );