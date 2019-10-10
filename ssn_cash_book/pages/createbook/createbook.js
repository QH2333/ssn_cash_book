//createbook.js
const app = getApp() //获取应用实例

Page({
  data: {
    bookName: "",
  },
  //事件处理函数
  onLoad: function () {
    const eventChannel = this.getOpenerEventChannel()
    var page = this;
    // eventChannel.emit('acceptDataFromOpenedPage', { data: 'test' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('sendOpenID', function (data) {
      page.setData({ openID: data.openID})
    })
  },
  onCreate: function(event) {
    wx.request({
      url: 'http://139.155.29.56:8080/SmartBillBackend/CreateBook',
      //url: 'http://localhost:8080/SmartBillBackend/CreateBook',
      data: {
        name: this.data.bookName,
        openid: this.data.openID,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
    })
    wx.navigateBack({
      delta: 1
    })
  },
  onConfirm: function(event) {
    this.setData({bookName: event.detail.value});
  },
});

