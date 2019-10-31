'use strict';

import {LazyLoad} from "./lazy-load";

export class PortfolioLoader {

  constructor() {
    this.endpoint = document.location.origin + '/endpoint/portfolio';
    this.active_buttons = [];
    this.container_div = document.getElementById( 'js-portfolio-results' );
    this.filters = document.querySelectorAll( '#js-portfolio-filters .button' );

    this.init();
  }

  init() {
    // add filter function
    this.filters.forEach( button => {
      button.addEventListener( 'click', () => {
        this.container_div.innerHTML = '';
        button.classList.toggle( 'active' );
        this.maybe_add_button( button );
        this.call_api();
      } );
    } );

    // add reset button
    document.getElementById( 'js-reset' ).addEventListener( 'click', () => {
      this.reset();
    });

    // lazy load images
    this.lazyLoader = new LazyLoad;
  }

  // resets active filters
  reset() {
    if ( this.active_buttons.length > 0 ) {
      this.active_buttons = [];

      this.filters.forEach( button => {
        button.classList.remove( 'active' );
      } );

      this.call_api();
    }
  };

  // add or remove toggled filter button from array
  maybe_add_button( element ) {
    const type = element.dataset.type;
    const index = this.active_buttons.indexOf( type );

    // remove ID if it exists, otherwise add
    if ( index > -1 ) {
      this.active_buttons.splice( index, 1 );
    } else {
      this.active_buttons.push( type );
    }
  }

  call_api() {
    let promise = new Promise( ( resolve, reject ) => {
      let xhr = new XMLHttpRequest();
      let types = '';

      xhr.onload = () => {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
          resolve( xhr.responseText );
        } else {
          reject(new Error('error thrown'));
        }
      };

      if ( this.active_buttons.length > 0 ) {
        types = 'types=';

        this.active_buttons.forEach( button => {
          types += button + ',';
        } );
      }

      types = types.slice( 0, -1 );

      xhr.open( 'POST', this.endpoint, true );
      xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
      xhr.send( types );
    } );

    // then...
    promise.then( response => {
      this.container_div.innerHTML = '';

      JSON.parse( response ).forEach( ( { name, url, thumb, folder } ) => {
        let element = document.createElement('a');
        element.href = '/portfolio/' + url + '/';
        element.classList.add( 'item', 'fade-in' );
        element.setAttribute( 'tabindex', 0 );

        let imgElm = document.createElement('img');
        imgElm.src = '/img/placeholder.png';
        imgElm.classList.add( 'responsive', 'lazyload' );
        imgElm.dataset.src = `/img/portfolio/${folder}/${thumb}`;
        imgElm.setAttribute( 'alt', 'portfolio thumbnail picture for ' + name );

        let figure = document.createElement('figure');

        let figcaption = document.createElement('figcaption');
        figcaption.innerText = name;

        figure.insertAdjacentElement( 'afterbegin', imgElm );
        figure.insertAdjacentElement( 'beforeend', figcaption );
        element.insertAdjacentElement( 'afterbegin', figure );

        this.container_div.insertAdjacentElement( 'beforeend', element );
      } );

      // run lazy loading again
      this.lazyLoader.init();
    } )
    .catch(function (error) {
      console.log(error);
    });
  }
}
