// returns all task options defined inside /tasks/

const fs = require('fs');
const path = require('path');
let configOptions = {};

const files = fs.readdirSync( path.join(__dirname, '/tasks/') );
const tasks = files.map( file => {
  return file.replace('.js', '');
} );

tasks.forEach( name => {
  configOptions[name] = require( './tasks/' + name );
});

module.exports = configOptions;