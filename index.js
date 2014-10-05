'use strict';

var callsites = require('v8-callsites');

function callersPath(frames, origin){

  var stack = callsites(frames || 2, origin || callersPath);
  return stack[stack.length-1].getFileName();
}

module.exports = callersPath;
