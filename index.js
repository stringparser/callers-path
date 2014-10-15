'use strict';

var callsites = require('v8-callsites');

function callersPath(origin){

  var stack = callsites(
    typeof origin === 'function' ? 1 : 2, origin || callersPath);
  return stack[stack.length-1].getFileName();
}

module.exports = callersPath;
