// config options for all routes
module.exports = {
  'index': {
    title: 'Home',
    description: 'The personal website and work portfolio for space cowboy and web development engineer, Mimi Kim.',
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
    description: 'About Mimi Kim: a space cowboy, a programming enthusiast, an internet denizen, and a robot bovine alien.',
    class: 'about',
    hasScript: true,
    hasStyle: true
  },
  'contact': {
    title: 'Contact',
    description: 'Contact Mimi Kim, web developer. Feel free to get in touch any time for questions, work opportunities, or just to say hello! See you, space cow.',
    class: 'contact',
    hasScript: true,
    hasStyle: true
  },
  'blog': {
    title: 'Blog',
    description: 'Mimi Kim\'s blog. A collection of thoughts, images, recipes, on-going projects, and tutorials.',
    class: 'blog',
    hasScript: true,
    hasStyle: true
  }
};
