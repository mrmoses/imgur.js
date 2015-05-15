import config from '../../package.json';

global.mocha.setup('bdd');
global.onload = function() {
  global.mocha.checkLeaks();
  global.mocha.globals(config.babelOptions.mochaGlobals);
  global.mocha.run();
  require('./setup')();
};
