// config options for all routes

module.exports = {
  'index': {
    title: 'See You Space Cow',
    class: 'home',
    hasScript: true,
    hasStyle: true
  },
  'portfolio': {
    title: 'Portfolio',
    class: 'portfolio',
    hasScript: true,
    hasStyle: true,
    portfolioThumbs: require('./config-portfolio')()
  },
  'about': {
    title: 'About',
    class: 'about',
    hasScript: true,
    hasStyle: true
  },
  'contact': {
    title: 'Contact',
    class: 'contact',
    hasScript: true,
    hasStyle: true
  },
  'blog': {
    title: 'Blog',
    class: 'blog',
    hasScript: true,
    hasStyle: true
  }
};
