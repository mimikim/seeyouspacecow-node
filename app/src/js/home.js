'use strict';

import { Cow } from './modules/cow-animation';

( () => {
  const animatedCow = document.getElementById( 'cow-animated' );
  if ( animatedCow !== undefined ) {
    animatedCow.addEventListener( 'load', () => {
      new Cow();
    }, false );
  }
})();
