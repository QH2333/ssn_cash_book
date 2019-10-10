//welcome.js
const app = getApp() //获取应用实例

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {
  },
  toIndex(e) {
    wx.navigateBack({
      delta: 1
    })
  },
})

//这里要加一个文字进入动画，删掉按钮进入小程序，改成1s自动进入。无需用户操作