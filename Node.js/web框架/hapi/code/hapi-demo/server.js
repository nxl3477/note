'use strict';

const Hapi = require('hapi');
const router = require("./router")
// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8000
});







// Add the route
// server.route({
//     method:'GET',
//     path:'/hello',
//     handler:function(request,h) {

//         return'hello world';
//     }
// });

// Start the server
const start = async function () {
  // 注册插件
  await server.register(require('inert'));
  await server.register({
    plugin: require('hapi-pino'),
    options: {
        prettyPrint: true,
        logEvents: ['response', 'onPostStart']
    }
  });

  for (let api of router) {
    server.route(api)
  }
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();