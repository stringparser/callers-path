'use strict';

var should = require('should');

module.exports = function(callersPath){

  console.log(callersPath());
  it('should return caller\'s path', function (){
    var callerPath = callersPath();

    should(callerPath).match(/node_modules.mocha/);
  });

};
