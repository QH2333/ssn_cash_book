// pages/openbill/openbill.js
const app = getApp() //获取应用实例

Page({
  data: {
    bookName: "",
    bookInfo: undefined
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
    })
  }
});

// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {

//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {

//   }
// })
