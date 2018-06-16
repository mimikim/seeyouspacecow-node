// returns all task options
module.exports = tasks => {
  let configOptions = {};

  tasks.forEach( name => {
    configOptions[name] = require('./tasks/' + name );
  });

  return configOptions;
};
