'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549511622254_817';

  // add your config here
  config.middleware = [
    'robot'
  ];


  // config/config.default.js
  // exports.keys = <此处改为你自己的 Cookie 安全字符串>;
  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  return config;
};
