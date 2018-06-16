const urls = require( '../config' );
const destination = urls.css.dist + 'style.css';
const source = urls.css.src + 'style.scss';

const indexDist = urls.css.dist + 'home.css';
const indexSrc = urls.css.src + 'home.scss';

const aboutDist = urls.css.dist + 'about.css';
const aboutSrc = urls.css.src + 'about.scss';

const blogDist = urls.css.dist + 'blog.css';
const blogSrc = urls.css.src + 'blog.scss';

const contactDist = urls.css.dist + 'contact.css';
const contactSrc = urls.css.src + 'contact.scss';

const portfolioDist = urls.css.dist + 'portfolio.css';
const portfolioSrc = urls.css.src + 'portfolio.scss';

const options = {
  dist: {
    options: {
      style: 'compressed'
    },
    files: {}
  }
};

// set filepaths
options.dist.files[destination] = source;
options.dist.files[indexDist] = indexSrc;
options.dist.files[aboutDist] = aboutSrc;
options.dist.files[blogDist] = blogSrc;
options.dist.files[contactDist] = contactSrc;
options.dist.files[portfolioDist] = portfolioSrc;

module.exports = options;
