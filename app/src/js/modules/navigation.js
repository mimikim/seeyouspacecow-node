'use strict';

window.onload = function() {

  const body = document.body,
    header = document.getElementById( 'js-header' ),
    main = document.getElementById( 'js-main' ),
    footer = document.getElementById( 'js-footer' );

  const navigation = document.getElementById( 'js-navigation' );
  const nav_toggle = document.getElementById( 'js-nav-toggle' );

  if ( ! nav_toggle ) {
    return;
  }

  const openMenu = () => {
    header.classList.add( 'opened' );
    body.classList.add( 'opened' );

    navigation.setAttribute( 'aria-expanded', 'true' );
    navigation.removeAttribute( 'aria-hidden' );

    nav_toggle.setAttribute( 'aria-pressed', 'false' );

    main.setAttribute( 'aria-hidden', 'true' );
    main.setAttribute( 'tabindex', '-1' );

    if ( footer !== null ) {
      footer.setAttribute( 'aria-hidden', 'true' );
      footer.setAttribute( 'tabindex', '-1' );
    }
  };

  const closeMenu = () => {
    body.classList.remove( 'opened' );
    header.classList.remove( 'opened' );

    navigation.setAttribute( 'aria-expanded', 'false' );
    navigation.setAttribute( 'aria-hidden', 'true' );

    nav_toggle.setAttribute( 'aria-pressed', 'true' );

    main.removeAttribute( 'aria-hidden' );
    main.removeAttribute( 'tabindex' );

    if ( footer !== null ) {
      footer.removeAttribute( 'aria-hidden' );
      footer.removeAttribute( 'tabindex' );
    }
  };

  const toggleMenu = ( e ) => {
    e.preventDefault();

    const isOpen = body.classList.contains( 'opened' );
    const isKeyUp = ( e.type === 'keyup' );
    const isMouseUp = ( e.type === 'mouseup' );

    if ( isOpen ) {

      if ( isKeyUp ) {
        // if ESC
        if ( e.keyCode === 27 ) {
          closeMenu();
        }
      }

      // if target is selected
      if ( e.target === nav_toggle || e.target.parentNode === nav_toggle ) {
        if ( isMouseUp || isKeyUp && e.keyCode === 13 ) {
          closeMenu();
        }
      }

    } else if ( ! isOpen && ( e.target === nav_toggle || e.target.parentNode === nav_toggle ) ) {
      if ( isMouseUp || ( isKeyUp && e.keyCode === 13 ) ) {
        openMenu();
      }
    }
  };

  document.addEventListener( 'mouseup', toggleMenu );
  document.addEventListener( 'keyup', toggleMenu );

  let fixed_header = () => {
    if ( window.scrollY > 50 ) {
      header.classList.add( 'fixed' );
    } else {
      header.classList.remove( 'fixed' );
    }
  };

  fixed_header();
  window.addEventListener( 'scroll', fixed_header );

};


