// returns all portfolio info (portfolio api)
const portfolioConfig = require('./config/portfolio');
const express = require('express');
const router = express.Router();

router.post('/endpoint/portfolio', function(req, res, next) {
  let items = portfolioConfig;

  // returns filtered portfolio items
  if ( req.body['types'] !== undefined ) {
    let selectedTypes = req.body['types'].split(',');

    items = portfolioConfig.filter( elm => {
      let flag = false;

      // check each category in types
      elm.type.forEach( ( elmType, index ) => {
        if ( selectedTypes.indexOf( elm.type[index] ) > -1 ) {
          flag = true;
        }
      } );

      if ( flag ) {
        return elm;
      }
    });
  }

  res.send( items );
});

module.exports = router;
