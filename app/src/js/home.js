'use strict';

import { Cow } from './modules/animation-cow';
import {Starfield} from "./modules/animation-starfield";

( () => {
  const animatedCow = document.getElementById( 'cow-animated' );
  if ( animatedCow !== undefined ) {
    animatedCow.addEventListener( 'load', () => {
      new Cow();
    }, false );
  }

  new Starfield;
})();
