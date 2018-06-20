'use strict';

export class Navigation {
  constructor() {
    this.html = document.body.parentNode;
    this.body = document.body;
    this.main = document.getElementById( 'js-main' );
    this.header = document.getElementById( 'js-header' );
    this.footer = document.getElementById( 'js-footer' );
    this.navigation = document.getElementById( 'js-navigation' );
    this.navToggle = document.getElementById( 'js-nav-toggle' );

    this.init();
  }

  init() {
    document.addEventListener( 'mouseup', (e) => {
      this.toggleMenu(e);
    });

    document.addEventListener( 'keyup', (e) => {
      this.toggleMenu(e);
    });

    if ( ! this.body.classList.contains('home') ) {
      this.stickyHeader();

      window.addEventListener( 'scroll', () => {
        this.stickyHeader();
      });
    }
  }

  openMenu() {
    this.html.style.overflow = 'hidden';
    this.header.classList.add( 'opened' );
    this.body.classList.add( 'opened' );

    this.navigation.setAttribute( 'aria-expanded', 'true' );
    this.navigation.removeAttribute( 'aria-hidden' );

    this.navToggle.setAttribute( 'aria-pressed', 'false' );

    this.main.setAttribute( 'aria-hidden', 'true' );
    this.main.setAttribute( 'tabindex', '-1' );

    if ( this.footer !== null ) {
      this.footer.setAttribute( 'aria-hidden', 'true' );
      this.footer.setAttribute( 'tabindex', '-1' );
    }
  };

  closeMenu() {
    this.html.style.overflow = '';
    this.body.classList.remove( 'opened' );
    this.header.classList.remove( 'opened' );

    this.navigation.setAttribute( 'aria-expanded', 'false' );
    this.navigation.setAttribute( 'aria-hidden', 'true' );

    this.navToggle.setAttribute( 'aria-pressed', 'true' );

    this.main.removeAttribute( 'aria-hidden' );
    this.main.removeAttribute( 'tabindex' );

    if ( this.footer !== null ) {
      this.footer.removeAttribute( 'aria-hidden' );
      this.footer.removeAttribute( 'tabindex' );
    }
  };

  toggleMenu( e ) {
    e.preventDefault();

    const isOpen = this.body.classList.contains( 'opened' );
    const isKeyUp = ( e.type === 'keyup' );
    const isMouseUp = ( e.type === 'mouseup' );

    if ( isOpen ) {

      if ( isKeyUp ) {
        // if ESC
        if ( e.keyCode === 27 ) {
          this.closeMenu();
        }
      }

      // if target is selected
      if ( e.target === this.navToggle || e.target.parentNode === this.navToggle ) {
        if ( isMouseUp || isKeyUp && e.keyCode === 13 ) {
          this.closeMenu();
        }
      }

    } else if ( ! isOpen && ( e.target === this.navToggle || e.target.parentNode === this.navToggle ) ) {
      if ( isMouseUp || ( isKeyUp && e.keyCode === 13 ) ) {
        this.openMenu();
      }
    }
  };

  stickyHeader() {
    if ( window.scrollY > 50 ) {
      this.header.classList.add( 'fixed' );
    } else {
      this.header.classList.remove( 'fixed' );
    }
  };

}
