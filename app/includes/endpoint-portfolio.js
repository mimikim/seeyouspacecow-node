// returns all portfolio info
const portfolioConfig = require('./config/pages-portfolio')();

let express = require('express');
let router = express.Router();

router.post('/endpoint/portfolio', function(req, res, next) {
  let items = portfolioConfig;
  let data = req.body['types'];

  // returns filtered portfolio items
  if ( data !== undefined ) {
    let types = JSON.parse( data );

    items = portfolioConfig.filter( ( elm, index ) => {
      if ( types.indexOf(elm.type) > -1 ) {
        return elm;
      }
    });
  }

  res.send( items );
});

module.exports = router;
