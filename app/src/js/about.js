'use strict';

import { $ } from '../vendor/jquery/dist/jquery';
import { Badge } from './modules/badge-animation';

( ( $ ) => {
  $ ( document ).ready( function() {
    new Badge;
  } );
})( jQuery );
