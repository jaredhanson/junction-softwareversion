/**
 * Module dependencies.
 */
var softwareVersion = require('./middleware/softwareVersion')
  , softwareVersionResultParser = require('./middleware/softwareVersionResultParser');

/**
 * Expose middleware.
 */
exports = module.exports = softwareVersion;
exports.softwareVersion = softwareVersion;
exports.softwareVersionResultParser = softwareVersionResultParser;
