'use strict';

var callsites = require('v8-callsites');

function callersPath(origin){
  if(typeof origin !== 'function'){ origin = null; }

  var stack = callsites(
    origin && 1 || 2,
    origin || callersPath
  );

  return stack[stack.length-1].getFileName();
}

module.exports = callersPath;
