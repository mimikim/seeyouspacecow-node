// trek badge and cards animation

'use strict';

import anime from '../../vendor/animejs/anime';

export class Badge {
  constructor() {
    this.container = document.getElementById( 'js-trek-badge' );
    this.graphic = document.getElementById( 'space-trek' );
    this.badge = document.querySelector( '#space-trek #Badge' );

    this.init();
  }

  init() {
    this.setCards();
    this.setBadge();

    this.graphic.addEventListener( 'mouseenter', () => {
      this.getSmile( 800 );
    });

    this.container.addEventListener( 'click', () => {
      anime( this.getTwirl() );
    });
  };

  setCards() {
    anime.timeline().add( [ {
      targets: '.card-container .card',
      translateY: [ -150, 0 ],
      opacity: [ 0, 1 ],
      duration: function(el, i, l) {
        return 2000 + (i * 1000);
      },
      delay: 900
    } ] );
  }

  setBadge() {
    let animations = [
      {
        targets: this.badge,
        strokeDashoffset: [ anime.setDashoffset, 0 ],
        easing: 'easeInOutSine',
        duration: 900
      },
      {
        targets: this.badge,
        easing: 'easeOutCirc',
        fill: '#CCD1D4',
        fillOpacity: [ 0, 1 ],
        duration: 300
      },
      {
        targets: document.querySelector( '#space-trek #highlight' ),
        easing: [ 0.000, 1.485, 0.710, 0.665 ],
        opacity: [ 0, 1 ],
        duration: 400
      },
      {
        targets: document.querySelector( '#space-trek #cow-head' ),
        easing: 'easeOutCubic',
        opacity: [ 0, 1 ],
        duration: 300,
        complete: () => {
          this.getSmile( 1250 );
        }
      }
    ];

    animations.push( this.getTwirl() );
    anime.timeline().add( animations );
  }

  getSmile( timeout ) {
    let closed_eyes = document.querySelector( '#space-trek #closed-eyes' );
    let opened_eyes = document.querySelector( '#space-trek #eyes' );

    opened_eyes.classList.add( 'hidden' );
    closed_eyes.classList.add( 'show' );

    setTimeout( () => {
      opened_eyes.classList.remove( 'hidden' );
      closed_eyes.classList.remove( 'show' );
    }, timeout );
  }

  getTwirl() {
    return {
      targets: this.graphic,
        easing: 'linear',
        rotateY: [ 0, 360, 0 ],
        duration: 500
    };
  }
}
