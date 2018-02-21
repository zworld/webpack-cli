const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpackConf/webpack.base.conf');
const webpackDevServer = require('webpack-dev-server');
const config = require('./config');
const chalk = require('chalk');
const cleanFile = require('./service/cleanFile');
const ora = require('ora');
const spinner = ora().start();
// webpack
const isProduction = process.env.NODE_ENV === 'production';
let excute = {
  prod: ()=>{
    cleanFile().then(()=>{
      const prodWebpackConfig = require('./webpackConf/webpack.prod.conf');
      const webPackConfig = merge(webpackBaseConfig,prodWebpackConfig);
      webpack(webPackConfig,function (err, stats) {
        if (err) throw err;
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
          }) + '\n\n');

        spinner.succeed('  Build complete.\n');
        console.log(chalk.yellow(
          '  Tip: built files are meant to be served over an HTTP server.\n' +
          '  Opening index.html over file:// won\'t work.\n'
        ));
      })
    })
  },
  dev: ()=>{
    const devWebpackConfig = require('./webpackConf/webpack.dev.conf');
    // const webpackConfig = merge(webpackBaseConfig,devWebpackConfig);
    const compiler = webpack(devWebpackConfig,(err,stats)=>{
      console.log('dev is excuting')
    })
    const server = new webpackDevServer(compiler, {
      contentBase: './dist',
      hot: true
    });
    server.listen(config.dev.port, "0.0.0.0")
  }
}
isProduction ? excute.prod() : excute.dev();

