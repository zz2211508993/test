const path=require('path');
const webpack=require('webpack');
/* 
 Vue-CLI为了方便起见对webpack原有的属性进行了一层封装，
 如果需要修改那么需要在项目中新建一个vue.config.js的文件
 然后去查询Vue-CLI是否能满足我们的要求
 如果可以满足要求，那么就使用Vue-CLI封装的属性来修改webpack
 如果可以满足要求，那么就使用configureWepack的属性来编写原生的webpack配置
*/
module.exports = {
    outputDir: 'bundle',
    configureWebpack: {
        // 就可以在这个对象中编写原生的webpack配置
        plugins: [
          new webpack.BannerPlugin({
            banner: '知播渔教育-www.it666.com'
          })
        ]
      }
}

