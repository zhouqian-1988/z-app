// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 准备数据
    list:[
      {name: '三国演义', price: 50},
      {name: '西游记', price: 55},
      {name: '红楼梦', price: 48},
      {name: '水浒传', price: 60}
    ],
    year: 3,
    msg: '你好',
    num: 123,
    hot: []
  },
  // 处理函数
  updateHandler() {
    this.setData({
      msg: 'someone like you',
      num: 789,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送请求
    wx.request({
      method: "GET",
      url:"https://wx.maoyan.com/mmdb/movie/v2/list/hot.json",
      data: {
        limit: 8,
        offset: 0,
        ct: "上海"
      },
      // 成功时的回调
      success: (res) => {
        console.log(res);
        const hot = res.data.data.hot
        this.setData({
          hot: hot
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})