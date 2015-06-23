'use strict';

var moduleB = require('./moduleB');
module.exports = function(){
  console.log('from moduleA, moduleB says', moduleB());
};
