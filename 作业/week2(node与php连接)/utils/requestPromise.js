const request = require('request');
const { baseUrl } = require('../config/config')
exports.get = (url) => new Promise((resolve, reject) => {
  request(`${baseUrl}${url}`,  (error, response, body) => {
    resolve(JSON.parse(body))
  });
})

exports.post = (url, form) => new Promise((resolve, reject) => {
  request.post({url:`${baseUrl}${url}`, form },  (error, response, body) => {
    resolve(JSON.parse(body))
  });
})

exports.put = (url, form) => new Promise((resolve, reject) => {
  request.post({url:`${baseUrl}${url}`, form },  (error, response, body) => {
    resolve(JSON.parse(body))
  });
})

exports.delete = (url, form) => new Promise((resolve, reject) => {
  request.post({url:`${baseUrl}${url}`, form },  (error, response, body) => {
    resolve(JSON.parse(body))
  });
})