// pages/income/income.js
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
  swichNav: function (event) {
    wx.navigateTo({
      url: '../outcome/detail',
    })
  },
  onTap:function(event){
    wx.navigateTo(
      {
        url:'../classify/classify',
      }
    )
  },
  onLoad: function (options) {



    var id = options.id;

    var is_back = options.is_back;

    //.....

  }
  // onLoad: function () {
  //   let that = this

  //   app.getUserInfo(function (userInfo) {

  //     that.setData({
  //       userInfo: userInfo
  //     })
  //   })
  // }
})
