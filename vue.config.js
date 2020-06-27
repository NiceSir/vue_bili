const path = require('path'); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports={
  // 公共路径(必须有的)
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "static",
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave: true,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  devServer: {
      open:true,
    //   host:0.0.0.0,
      port:8000,
      proxy:null
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `            
            // @import "@/assets/scss/_variable.scss";
            // @import "@/assets/scss/reset.scss";
          `
      }
    }
  },
  chainWebpack:config=>{
      config.resolve.alias
        .set('@', resolve('./src'))
        .set('components', resolve('./src/components'))
        .set('views', resolve('./src/views'))
        .set('assets', resolve('./src/assets'))
  }
}