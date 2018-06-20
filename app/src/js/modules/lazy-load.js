// lazy loads images
// more or less ganked from https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/#lazy_loading_images

export class LazyLoad {
  constructor() {
    document.addEventListener( 'DOMContentLoaded', () => {
      this.init();
    });
  }

  init() {
    this.images = [].slice.call( document.querySelectorAll( 'img.lazyload' ) );
    this.active = false;

    this.lazyLoad();

    document.addEventListener( 'scroll', () => { this.lazyLoad(); } );
    window.addEventListener( 'resize', () => { this.lazyLoad(); } );
    window.addEventListener( 'orientationchange', () => { this.lazyLoad(); } );
  }

  lazyLoad() {
    if ( this.active === false ) {
      this.active = true;

      setTimeout( () => {
        this.images.forEach( lazyImage => {
          let isInView = ( lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0 );

          if ( isInView && getComputedStyle( lazyImage ).display !== 'none' ) {

            // set proper url to image
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove( 'lazyload' );

            this.images = this.images.filter( function( image ) {
              return image !== lazyImage;
            });

            if ( this.images.length === 0 ) {
              this.lazyLoad();

              document.removeEventListener( 'scroll', () => { this.lazyLoad(); } );
              window.removeEventListener( 'resize', () => { this.lazyLoad(); } );
              window.removeEventListener( 'orientationchange', () => { this.lazyLoad(); } );
            }
          }
        });

        this.active = false;

      }, 200 );
    }
  };

}
