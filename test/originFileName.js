'use strict';

var should = require('should');

module.exports = function (callersPath){

  it('should return origin\'s path', function (){
    origin();
    function origin(){
      var callerPath = callersPath(origin);
      should(callerPath).match(__filename);
    }
  });

};