// pages/detail/detail.js
let app = getApp()
Page({
  data: {
    currentTab: 0,
    tabArray: ["支出", "收入"]

  },
  //事件处理函数
  bindChange: function (e) {
    let that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  swichNav: function (e) {
    let that = this;
         if (this.data.currentTab === e.target.dataset.current) {
     return false;
    }
     else {
       that.setData({
        currentTab: e.target.dataset.current
   })
    }

  },
  onTap: function (event) {
    wx.navigateTo(
      {
        url: '../classify/classify',
      }
    )
  },
  onLoad: function () {
    let that = this

    app.getUserInfo(function (userInfo) {

      that.setData({
        userInfo: userInfo
      })
    })
  }
})
