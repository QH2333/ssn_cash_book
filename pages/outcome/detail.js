// pages/detail/detail.js
let app = getApp()
Page({
  data: {
    openID: undefined,
    bookID: undefined,
    amount: undefined,
    classification: undefined,
    currentTab: 0,
    tabArray: ["支出", "收入"]
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    var page = this;
    eventChannel.on('sendBookID', function (data) {
      console.log(data);
      page.setData({
        openID: data.openID,
        bookID: data.bookID
      })
    })
  },

  onAmountConfirm: function (event) { // 输入消费金额
    this.setData({ amount: event.detail.value });
  },
  onNoteConfirm: function (event) { // 输入备注
    this.setData({ note: event.detail.value });
  },
  onDateChange: function (event) { // 选择时间
    this.setData({ date: event.detail.value });
  },
  chooseClassification: function (event) {
    var page = this;
    wx.navigateTo({
      url: '../classify/classify',
      success: function (res) {
        res.eventChannel.on('sendChosenClassification', function (data) {
          page.setData({classification: data.classification});
        });
      }
    })
  },
  onAdd: function () { // 确定按钮
    wx.request({
      url: 'http://139.155.29.56:8080/SmartBillBackend/AddEntry',
      //url: 'http://localhost:8080/SmartBillBackend/AddEntry',
      data: {
        date: this.data.date,
        in_out: this.data.currentTab,
        amount: this.data.amount,
        classification: this.data.classification,
        note: this.data.note,
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
  onCancel: function () { // 取消按钮
    wx.navigateBack({
      delta: 1
    })
  },

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

    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
})    