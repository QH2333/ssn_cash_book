// pages/classify/classify.js
var app = getApp()
Page({
  data: {
    classList: [
      { classID: 1, src: '../images/meals-copy.png' },
      { classID: 2, src: '../images/bus-copy.png' },
      { classID: 3, src: '../images/shoppingbagalt-copy.png' },
      { classID: 4, src: '../images/fushi.png' },
      { classID: 5, src: '../images/riyongpin-copy.png' }
    ]
  },
  toDetail: function(e) {
    const eventChannel = this.getOpenerEventChannel();
    var page = this;
    var id = e.currentTarget.dataset.id;
    eventChannel.emit("sendChosenClassification", {classification: id});
    wx.navigateBack({
      delta: 1
    })

  }
})