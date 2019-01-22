// register handlebar partials
// https://handlebarsjs.com/partials.html
// reads file contents asynchronously, callback function registers partial

const fs = require('fs');
const hbs = require('hbs');
const path = require('path');
const partialsPath = path.join(__dirname, '../views/partial/');

module.exports = function() {
  fs.readdir( partialsPath, ( err, partials ) => {

    // for each hbs file, register partial
    partials.forEach( fileName => {
        let expressionName = fileName.replace('.hbs', '');

        fs.readFile( path.join(__dirname, '../views/partial/' + fileName), 'utf8', (err, fileContents) => {
          hbs.registerPartial( expressionName, fileContents );
        });
      }
    );

  });
};
