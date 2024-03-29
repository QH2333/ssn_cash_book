// pages/openbill/openbill.js
const app = getApp() //获取应用实例
var util = require('../../utils/util.js');
Page({
  data: {
    bookInfo: undefined,
    entryList: undefined,
    classInfo: ["餐饮", "交通", "购物", "服饰", "日用"],
  },
  //事件处理函数
  onLoad: function () {
    const eventChannel = this.getOpenerEventChannel()
    var page = this;
    // eventChannel.emit('acceptDataFromOpenedPage', { data: 'test' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('sendBookInfo', function (data) {
      page.setData({
        openID: data.openID,
        bookInfo: data.bookInfo
      });
      console.log(page.data.bookInfo);
      page.pullBookInfo(page.data.bookInfo.bookID);
    })
  },
  loadTime:function(){
    var TIME = util.formatTime(new Date());

    this.setData({

      time: TIME

    });
  },
  addEntry: function() {
    var page = this;
    wx.navigateTo({
      url: '../outcome/detail',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('sendBookID', {
          openID: page.data.openID,
          bookID: page.data.bookInfo.bookID
        })
      }
    })
  },
  onDateChange: function (event) { // 选择时间
    this.setData({ date: event.detail.value });
  },
  onPullDownRefresh: function (event) {
    this.pullBookInfo(this.data.bookInfo.bookID);
  },
  
  pullBookInfo: function(bookID) {
    wx.request({
      url: 'http://139.155.29.56:8080/SmartBillBackend/GetEntryList',
      //url: 'http://localhost:8080/SmartBillBackend/GetEntryList',
      data: {
       bookid: bookID
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        this.setData({ entryList: res.data.reverse() });
        console.log(res.data)
      }
    });
  }
})