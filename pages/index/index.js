//index.js
const app = getApp() //获取应用实例

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    openID: "",
    bookList: [],
  },
  //事件处理函数
  onLoad: function () {
    // 如果该用户第一次打开小程序（本地没有缓存），则显示欢迎页面
    var notFirst = wx.getStorageSync("notFirst");
    if (!notFirst) {
      wx.setStorageSync("notFirst", true)
      wx.navigateTo({
        url: '../welcome/welcome',
      })
    }
    // 登录
    this.login();
  },
  onTap: function(event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
  },
  onCreate: function(event) {
    var page = this;
    wx.navigateTo({
      url: '../createbook/createbook',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('sendOpenID', { openID: page.data.openID })
      }
    })
  },
  onPullDownRefresh: function(event) {
    this.updateBooklist();
  },
  updateBooklist: function() {
    wx.request({
      url: 'http://139.155.29.56:8080/SmartBillBackend/GetBookList',
      //url: 'http://localhost:8080/SmartBillBackend/GetBookList',
      data: {
        openid: this.data.openID
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        this.setData({bookList: res.data});
        console.log(res.data)
      }
    })
  },
  login: function() {
    wx.login({
      success: res => {
        wx.request({
          url: 'http://139.155.29.56:8080/SmartBillBackend/Login',
          //url: 'http://localhost:8080/SmartBillBackend/Login',
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: res => {
            this.data.openID = res.data;
            console.log(res.data)
            // 从服务器中拉取用户的账本信息
            this.updateBooklist();
          }
        })
      }
    })
  }
});