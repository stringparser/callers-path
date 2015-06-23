'use strict';

var fs = require('fs');
var path = require('path');
var pack = require('../');

var testFiles = fs.readdirSync('./test/');
var exclude = testFiles.indexOf(path.basename(__filename));
    testFiles.splice(exclude,1);

testFiles.forEach(function(name){

  name = path.basename(name, path.extname(name));
  describe(name, function(){
    require('./'+name)(pack);
  });
});
