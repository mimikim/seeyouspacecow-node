'use strict';

import { Cow } from './modules/animation-cow';
import {Starfield} from "./modules/animation-starfield";

( () => {
  const animatedCow = document.getElementById( 'cow-animated' );
  if ( animatedCow !== undefined ) {
    new Cow();
  }

  new Starfield;
})();
