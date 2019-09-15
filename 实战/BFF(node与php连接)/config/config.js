const { join } = require('path')
const _ = require('underscore')
let config = {
  staticDir: join(__dirname, '../assets'),
  viewDir: join(__dirname, '../views')
}
if( process.env.NODE_ENV == "development" ) {
  const localConfig = {
    baseUrl: `http://localhost:8088/basic/web/index.php?r=library%2F`,
    cacheMode: false,
    port: 3000
  }
  config = _.extend(config, localConfig)
}

if( process.env.NODE_ENV == "production" ) {
  const prodConfig = {
    baseUrl: `http://localhost:8088/basic/web/index.php?r=library%2F`,
    cacheMode: "memory",
    port: 3000
  }
  config = _.extend(config, prodConfig)
}


module.exports = config