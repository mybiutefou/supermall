module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportwidth: 375, //视窗的宽度,对应的是我们设计稿的宽度(750 retina 1点 2个像素).
      viewportHeight: 667, //视留的高度,对应的是我们设计稿的高度.(也可以不配置)
      unitPrecision: 5, //指定px转换为视窗单位值的小数位效(很多时候无法整除)
      viewportunit: 'vw', //指定需要转换成的提窗单位,建议使用vw
      selectorBlackuist: ['ignore", "tab-bar', 'tab-bar-item'], //指定不需要转换的类,后面再讲  也是正则只是没有按正则去写
      minpixelvalue: 1, //小于或等于.1px,不转换为视窗单位
      mediaquery: false, //允许在媒体查询中转换px
      exclude: [/TabBar/],  //必须是正则，匹配文件的
    }
  }
}

// 1.在js中使用正则： /正则相关规则/
// 2.exclude中存放的元素必须是正则表达式
// 3.正则的规则:
// 1>  ^: 表示匹配的内容，必须以什么内容开头(以abc开头）
// 2>  abc$  表示匹配的内容必须以abc结尾
