var vows = require('vows');
var assert = require('assert');
var softwareversion = require('index');


vows.describe('junction-softwareversion').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(softwareversion);
      assert.isFunction(softwareversion.softwareVersion);
      assert.isFunction(softwareversion.softwareVersionResultParser);
    },
  },
  
}).export(module);
