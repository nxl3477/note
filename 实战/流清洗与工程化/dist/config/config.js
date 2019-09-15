'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var _ = _interopDefault(require('underscore'));

let config = {
  staticDir: path.join(__dirname, '../assets'),
  viewDir: path.join(__dirname, '../views')
};

{
  const prodConfig = {
    baseUrl: `http://localhost:8088/basic/web/index.php?r=library%2F`,
    cacheMode: "memory",
    port: 3000
  };
  config = _.extend(config, prodConfig);
}


module.exports = config;
