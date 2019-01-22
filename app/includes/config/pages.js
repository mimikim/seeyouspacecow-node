// config options for all routes

module.exports = {
  'index': {
    title: 'See You Space Cow',
    description: 'The personal website and work portfolio for space cowboy and development engineer, Mimi Kim. Easy and informative blog tutorials for anyone interested in web development!',
    class: 'home',
    hasScript: true,
    hasStyle: true
  },
  'portfolio': {
    title: 'Portfolio',
    description: 'A portfolio of project work completed by web developer Mimi Kim. Projects have included work for Apple, Google, Ragu Pasta Sauce, AMC, Liberty Mutual, Dish TV, and more!',
    class: 'portfolio',
    hasScript: true,
    hasStyle: true,
    portfolioThumbs: require('./portfolio')
  },
  'about': {
    title: 'About',
    description: 'About Mimi Kim: a space cowboy; a programming enthusiast; an internet denizen. I am a robot bovine alien.',
    class: 'about',
    hasScript: true,
    hasStyle: true
  },
  'contact': {
    title: 'Contact',
    description: 'Contact Mimi Kim, web developer. Feel free to get in touch any time for questions, freelance opportunities, or just to say hello! See you, space cow.',
    class: 'contact',
    hasScript: true,
    hasStyle: true
  },
  'blog': {
    title: 'Blog',
    description: '',
    class: 'blog',
    hasScript: true,
    hasStyle: true
  }
};
