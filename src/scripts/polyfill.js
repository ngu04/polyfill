require('./polyfills/Element')();
require('./polyfills/events')();
require('./polyfills/hasOwnProperty')();
require('./polyfills/String')();
require('./polyfills/whichIE')();
require('./polyfills/pageOffset.js')();
require('./polyfills/rAF.js')();

require('es5-shim/es5-shim');
require('es5-shim/es5-sham');

module.exports = {};

if (typeof skyComponents === "undefined") window.skyComponents = {};
skyComponents.polyfill = module.exports;
