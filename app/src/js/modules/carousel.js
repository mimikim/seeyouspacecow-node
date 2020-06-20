'use strict';

export class Carousel {
  constructor() {
    this.endpoint = `${document.location.origin}/endpoint/carousel/`;
    this.container = document.getElementById( 'slider' );
    this.folder =  this.container.dataset.folder;

    this.prev = document.getElementById( 'prev' );
    this.next = document.getElementById( 'next' );
    this.currentIndex = 0;
    this.slides = [];

    this.call_api();
  }

  call_api() {
    let promise = new Promise( ( resolve, reject ) => {
      let xhr = new XMLHttpRequest();

      xhr.onload = () => {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
          resolve( xhr.responseText );
        } else {
          reject( new Error( 'error thrown' ) );
        }
      };

      xhr.open( 'POST', this.endpoint, true );
      xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
      xhr.send( `folder=${this.folder}` );
    });

    promise.then( response => {
      JSON.parse( response ).forEach( ( elm ) => {
        let slide = document.createElement( 'div' );
        slide.classList.add( 'slide' );
        slide.innerHTML = elm;
        this.container.insertAdjacentElement( 'beforeend', slide );
        this.slides.push( slide );
      });

      this.run_carousel();
    })
      .catch( function( error ) {
        console.log( error );
      });
  }

  run_carousel() {
    let count = this.slides.length;
    this.load_slide( this.currentIndex );

    if ( count > 1 ) {
      this.prev.addEventListener( 'click', () => {
        // if current index == 0, previous element loops back to length
        if( this.currentIndex === 0 ) {
          this.currentIndex = ( count - 1 );
        } else {
          this.currentIndex--;
        }

        this.load_slide( this.currentIndex );
      });

      this.next.addEventListener( 'click', () => {
        // if current index == length, next is 0
        if( this.currentIndex === ( count - 1 ) ) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }

        this.load_slide( this.currentIndex );
      });

    } else {
      document.getElementById( 'controls' ).innerHTML = '';
    }
  }

  load_slide( index ) {
    if ( index == null ) {
      index = this.currentIndex;
    }

    if ( this.container.classList.contains( 'hidden' ) ) {
      this.container.classList.remove( 'hidden' );
      this.container.setAttribute('data-folder', '');
    }

    this.container.innerHTML = '';
    this.container.appendChild( this.slides[index] );
  }
}
