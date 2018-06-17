// register handlebar partials

const fs = require('fs');
const hbs = require('hbs');
const path = require('path');

module.exports = function() {
  hbs.registerPartial( 'head', fs.readFileSync(path.join(__dirname, '../views/head.hbs'), 'utf8') );
  hbs.registerPartial( 'footer', fs.readFileSync(path.join(__dirname, '../views/footer.hbs'), 'utf8') );
  hbs.registerPartial( 'portfolio-item', fs.readFileSync(path.join(__dirname, '../views/portfolio-item.hbs'), 'utf8') );
};
