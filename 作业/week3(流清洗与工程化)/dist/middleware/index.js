"use strict";

const middleWareQueue = [require('./log4'), require('./errorHandler').error, require('./bodyParse'), require('./koaSwig'), require('./koaStatic')];

module.exports = app => middleWareQueue.forEach(middle => middle(app));