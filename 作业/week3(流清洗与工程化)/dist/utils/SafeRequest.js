"use strict";

const f = require('node-fetch');

const {
  URLSearchParams
} = require('url');

const {
  baseUrl
} = require('../config/config');

class SafeRequest {
  constructor(url) {
    this.url = url;
    this.baseURL = baseUrl;
  }

  fetch(options) {
    let myfetch = fetch(this.baseURL + this.url);

    if (options.params) {
      myfetch = fetch(this.baseURL + this.url, { ...options
      });
    } // ----------------yii能接收到参数的转换方法----------------------


    const parmas = new URLSearchParams();
    parmas.append("Books[name]", "名称测试");
    parmas.append("Books[name]", "名称测试");
    parmas.append("Books[name]", "名称测试"); // ----------------yii能接收到参数的转换方法----------------------

    return new Promise((resolve, reject) => {
      // 结果容错
      let result = {
        code: 0,
        message: "",
        data: []
      };
      myfetch.then(res => res.json()).then(json => {
        result.data = json;
        resolve(result);
      }).catch(error => {
        result.code = 1;
        result.message = 'node-fetch和后端通讯异常';
        reject(result);
      });
    });
  }

}

module.exports = SafeRequest;