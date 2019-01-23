// read and return all content inside /portfolio-items/

const fs = require('fs');
const path = require('path');
const files = fs.readdirSync( path.join(__dirname, '/portfolio-items/') );

let data = [];

// for each file in directory, push into data array
files.forEach( file => {
    let name = file.replace('.js', '');
    data.push( require( './portfolio-items/' + name ) );
  }
);

module.exports = data;