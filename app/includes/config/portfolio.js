// read and return all content inside /portfolio-items/

const fs = require('fs');
const path = require('path');
const files = fs.readdirSync( path.join(__dirname, '/portfolio-items/') );

let data = [];
let featured = [];

// for each file in directory, push into data array
files.forEach( file => {
    let name = file.replace('.js', '');
    let item = require( './portfolio-items/' + name );

    if ( item.feature ) {
      featured.push( item );
    } else {
      data.push( item );
    }
  }
);

module.exports = featured.concat( data );