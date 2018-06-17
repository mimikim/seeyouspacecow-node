// config options for all routes

module.exports = {
  'index': {
    title: 'See You Space Cow - Mimi Kim Web Developer',
    class: 'home',
    hasScript: true,
    hasStyle: true
  },
  'portfolio': {
    title: 'Mimi Kim Web Developer Portfolio',
    class: 'portfolio',
    hasScript: true,
    hasStyle: true,
    portfolioItems: require('./config-portfolio')
  },
  'about': {
    title: 'About Mimi Kim, Web Developer',
    class: 'about',
    hasScript: true,
    hasStyle: true
  },
  'contact': {
    title: 'Contact Mimi Kim, Web Developer',
    class: 'contact',
    hasScript: true,
    hasStyle: true
  },
  'blog': {
    title: 'About Mimi Kim, Web Developer',
    class: 'blog',
    hasScript: true,
    hasStyle: true
  }
};
