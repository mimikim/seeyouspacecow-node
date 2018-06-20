// homepage cow animation

'use strict';

import anime from '../../vendor/animejs/anime';

export class Cow {
  constructor() {
    this.face();
    this.draw_lines();
  }

  // animations on the face
  face() {
    let randomTime = Math.floor( Math.random() * 3000 ) + 800;

    setTimeout( () => {
      this.blink();
      this.face();
    }, randomTime );
  }

  blink() {
    const eyes_opened = document.getElementById( 'g-eyes-open' );
    const eyes_down = document.getElementById( 'g-eyes-down' );

    eyes_opened.classList.add( 'hidden' );
    eyes_down.classList.add( 'show' );

    setTimeout( () => {
      eyes_opened.classList.remove( 'hidden' );
      eyes_down.classList.remove( 'show' );
    }, 500 );
  }

  draw_lines() {
    const cow_paths = [
      document.querySelector('#body-outline'),
      document.querySelector('#helmet-outline'),
      document.querySelector('#tail-path'),
      document.querySelector('#face-path'),
      document.querySelector('#left-ear')
    ];

    anime.timeline().add( [ {
      targets: cow_paths,
      strokeDashoffset: [ anime.setDashoffset, 0 ],
      easing: 'easeInOutSine',
      duration: 800,
      delay: 400
    } ] );
  }
}
