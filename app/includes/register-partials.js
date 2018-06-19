// register handlebar partials

const fs = require('fs');
const hbs = require('hbs');
const path = require('path');

module.exports = function() {
  hbs.registerPartial( 'head', fs.readFileSync(path.join(__dirname, '../views/partial/head.hbs'), 'utf8') );
  hbs.registerPartial( 'footer', fs.readFileSync(path.join(__dirname, '../views/partial/footer.hbs'), 'utf8') );
  hbs.registerPartial( 'portfolio-thumb', fs.readFileSync(path.join(__dirname, '../views/partial/portfolio-thumb.hbs'), 'utf8') );
};
