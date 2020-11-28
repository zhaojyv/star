module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-px2rem')({
        remUnit: 50, // 1.333333rem = 1rem
        remPrecision: 2 // rem的小数点后位数
      })
    ]
  }