// returns carousel slides, based off passed folder name
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.post( '/endpoint/carousel', function( req, res ) {
  const folder = req.body['folder'];
  const folderPath = path.join( __dirname, `../src/img/portfolio/${folder}/slides/` );
  const files = fs.readdirSync( folderPath );
  let slides = [];

  files.forEach( image => {
    // ignores .DS_Store for Macs
    if ( '.DS_Store' !== image ) {
      slides.push( `<img src="/img/portfolio/${folder}/slides/${image}">` );
    }
  });

  res.send( slides );
});

module.exports = router;