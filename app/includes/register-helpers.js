// registers helper functions
const hbs = require('hbs');

hbs.registerHelper({
  'displaySkipLinks': function( pageTitle, options ) {
    let doNotDisplay = [
      'See You Space Cow',
      'Page Not Found!'
    ];

    // if page title is NOT in array
    if ( doNotDisplay.indexOf( pageTitle ) === -1 ) {
      return options.fn(this);
    }
  }
});
