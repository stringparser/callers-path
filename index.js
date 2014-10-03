'use strict';

var type = require('utils-type');
var callsites = require('v8-callsites');

function callersPath(frames, origin){

  frames = (type(frames).integer || 0) + 2;
  var stack = callsites(frames, origin || callersPath);
  return stack[stack.length-1].getFileName();
}

module.exports = callersPath;
