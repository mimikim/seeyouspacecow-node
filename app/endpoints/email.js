// email endpoint

let express = require('express');
let router = express.Router();

router.get('/mail/:email', function(req, res, next) {
  console.log( req.params.email );

  res.send( 'this is the response sent when accessing /mail/:email' );
});

module.exports = router;
