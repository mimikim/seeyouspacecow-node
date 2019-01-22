// read and return all content inside /portfolio-items/

const fs = require('fs');
const path = require('path');
const itemsPath = path.join(__dirname, '/portfolio-items/');

let data = [];

// read directory asynchronously using fs
fs.readdir( itemsPath, ( err, files ) => {

  // for each file, push into data array
  files.forEach( file => {
      let name = file.replace('.js', '');
      data.push( require( './portfolio-items/' + name ) );
    }
  );
});

module.exports = data;