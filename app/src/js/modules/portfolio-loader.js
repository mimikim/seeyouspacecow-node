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
        this.api_call( this.active_buttons );
      } );
    } );

    // add reset button
    document.getElementById( 'js-reset' ).addEventListener( 'click', () => {
      this.reset();
    });
  }

  // resets active filters
  reset() {
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
    const type = element.dataset.type;
    const index = this.active_buttons.indexOf( type );

    // remove ID if it exists, otherwise add
    if ( index > -1 ) {
      this.active_buttons.splice( index, 1 );
    } else {
      this.active_buttons.push( type );
    }
  }

  api_call( selectedTypes = [] ) {
    // create promise
    let promise = new Promise( ( resolve, reject ) => {
      let xhr = new XMLHttpRequest();
      let types = '';

      xhr.onload = function() {
        if ( this.readyState === 4 && this.status === 200 ) {
          resolve( xhr.responseText );
        }
      };

      if ( selectedTypes.length > 0 ) {
        types = 'types=' + JSON.stringify( selectedTypes );
      }

      xhr.open( 'POST', this.endpoint, true );
      xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
      xhr.send( types );
    } );

    // then...
    promise.then( response => {
      let html = '';

      JSON.parse( response ).forEach( ( { name, url, thumb } ) => {
        html += `<a href="${url}" class="item fade-in" tabindex="0">`
          + `<figure>`
          + `<img src="${thumb}" class="responsive">`
          + `<figcaption>${name}</figcaption>`
          + `</figure>`
          + `</a>`;
      } );

      this.container_div.innerHTML = html;
    } );
  }
}
