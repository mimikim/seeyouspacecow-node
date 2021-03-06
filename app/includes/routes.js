// application endpoints (pages)

const express = require('express');
const router = express.Router();
const config = require('./config/pages');

// for each page in routes config
for( let route in config ) {
  let name = route;
  let options = config[name];

  if ( name === 'index' ) {
    router.get('/', function(req, res, next) {
      res.render( name, options );
    });

    // redirects, just in case
    router.get('/index.html', function(req, res, next) {
      res.render( name, options );
    });

    router.get('/index.php', function(req, res, next) {
      res.render( name, options );
    });
  }

  router.get('/' + name, function(req, res, next) {
    res.render( name, options );
  });
}

// generate portfolio item content
const portfolioConfig = require('./config/portfolio');

portfolioConfig.forEach( function( elm ) {
  let options = elm;
  options.class = 'portfolio-item';
  options.hasScript = true;
  options.hasStyle = true;
  options.title = options.name;

  router.get('/portfolio/' + elm.url, function(req, res, next) {
    res.render( 'portfolio-item', options );
  });
});

module.exports = router;
