const config = require('../config');
var chalk = require('chalk');
var rm = require('rimraf');
module.exports = (callback)=>{
  return new Promise((resolve)=>{
    rm(config.prod.assetsDirectory,()=>{
      console.log(chalk.green('fileClean is done'))
      resolve()
    })
  })
}



