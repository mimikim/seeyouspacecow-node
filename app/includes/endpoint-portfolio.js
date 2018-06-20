// returns all portfolio info
const portfolioConfig = require('./config/portfolio-items/');

let express = require('express');
let router = express.Router();

router.post('/endpoint/portfolio', function(req, res, next) {
  let items = portfolioConfig;
  let data = req.body['types'];

  // returns filtered portfolio items
  if ( data !== undefined ) {
    let selectedTypes = JSON.parse( data );

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
