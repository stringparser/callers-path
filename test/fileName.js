'use strict';

var should = require('should');

module.exports = function(callersPath){

  it('should return caller\'s path', function origin(){
    var callerPath = callersPath(1);

    should(callerPath).match(/node_modules.mocha/);
  });

};
