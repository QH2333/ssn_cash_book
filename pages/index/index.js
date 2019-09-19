//index.js
const app = getApp() //获取应用实例

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onLoad: function () {
    var notFirst = wx.getStorageSync("notFirst");
    if (!notFirst) {
      wx.setStorageSync("notFirst", true)
      wx.navigateTo({
        url: '../welcome/welcome'
      })
    }
  },
})
