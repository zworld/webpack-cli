const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = {
  assetsPublicPath: '/',
  assetsDirectory: resolve('/dist'),
  port: 8080
}
