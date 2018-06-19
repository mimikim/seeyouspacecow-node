export class Portfolio {

  constructor() {
    // set variables
    this.route = `${wp_portfolio.url}/wp-json/spacecow/v1/portfolio/`;
    this.active_buttons = [];
    this.container_div = document.getElementById( 'js-portfolio-results' );
    this.filters = document.querySelectorAll( '#js-portfolio-filters .button' );

    // add filter function
    this.filters.forEach( button => {
      button.addEventListener( 'click', () => {
        this.container_div.innerHTML = '';
        button.classList.toggle( 'active' );
        this.maybe_add_button( button );
        this.api_call( this.active_buttons );
      } );
    } );

    // add reset button
    document.getElementById( 'js-reset' ).addEventListener( 'click', this.reset );
  }

  // resets active filters
  reset = () => {
    if ( this.active_buttons.length > 0 ) {
      this.active_buttons = [];

      this.filters.forEach( button => {
        button.classList.remove( 'active' );
      } );

      this.api_call();
    }
  };

  // add or remove toggled filter button from array
  maybe_add_button( element ) {
    const id = parseInt( element.dataset.categoryId, 10 );
    const index = this.active_buttons.indexOf( id );

    // remove ID if it exists, otherwise add
    if ( index > -1 ) {
      this.active_buttons.splice( index, 1 );
    } else {
      this.active_buttons.push( id );
    }
  }

  api_call( selectedIDs = [] ) {
    // create promise
    let promise = new Promise( ( resolve, reject ) => {
      let xhr = new XMLHttpRequest();
      let url = this.route;

      xhr.onload = function() {
        if ( this.readyState === 4 && this.status === 200 ) {
          resolve( xhr.responseText );
        }
      };

      if ( selectedIDs.length > 0 ) {
        url = url + '?type=' + JSON.stringify( selectedIDs );
      }

      xhr.open( 'GET', url, true );
      xhr.send( null );
    } );

    // then...
    promise.then( response => {
      let html = '';

      JSON.parse( response ).forEach( ( { id, title, image, url } ) => {
        html += `<a href="${url}" class="item fade-in" tabindex="0">`
          + `<figure>`
          + `<img src="${image}" class="responsive">`
          + `<figcaption>${title}</figcaption>`
          + `</figure>`
          + `</a>`;
      } );

      this.container_div.innerHTML = html;
    } );
  }

}
