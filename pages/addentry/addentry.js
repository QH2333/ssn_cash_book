// pages/addentry.js
Page({
  data: {
    openID: undefined,
    bookID: undefined,
    amount: undefined
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    var page = this;
    eventChannel.on('sendBookID', function (data) {
      page.setData({
        openID: data.openID,
        bookID: data.bookID
      })
    })
  },
  onAdd: function() {
    wx.request({
      url: 'http://139.155.29.56:8080/SmartBillBackend/AddEntry',
      //url: 'http://localhost:8080/SmartBillBackend/AddEntry',
      data: {
        date: "2019",
        in_out: 1,
        amount: this.data.amount,
        classification: 5,
        note: "A test",
        bookid: this.data.bookID,
        openid: this.data.openID
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
    })
    wx.navigateBack({
      delta: 1
    })
  },
  onConfirm: function (event) {
    this.setData({ amount: event.detail.value });
  },
})