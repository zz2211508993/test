
module.exports = {
  presets: [
    // '@vue/app',
        // 添加这种方式就可以按需了
      ['@vue/cli-plugin-babel/preset',{'modules': false}]    
        /* 
          这种也可以
        ['@babel/preset-env', // 添加 babel-preset-env 配置 就可以使用按需
        {
          'modules': false
        } 
        */
    ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui', // 按需引入的组件库
        'styleLibraryName': 'theme-chalk' // 按需引入的样式
      }
    ]
  ]
}


