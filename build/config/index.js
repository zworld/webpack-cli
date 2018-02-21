const devConfig = require('./dev.conf')
const prodConfig = require('./prod.conf')
module.exports = {
  dev: devConfig,
  prod: prodConfig,
  base:{
    port: 8080
  }
}
