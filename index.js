'use strict';

var callsites = require('v8-callsites');

function callersPath(origin){

  var stack = callsites(origin ? 1 : 2, origin || callersPath);
  return stack[1].getFileName();
}

module.exports = callersPath;
