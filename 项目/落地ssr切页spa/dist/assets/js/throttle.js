"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function nxl() {}

nxl._version = 0.1;

nxl.throttle = function (fn, wait = 300) {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => timer = null, wait); // 方便改变this指向

      return fn.apply(this, args);
    }
  };
};

exports.default = nxl;