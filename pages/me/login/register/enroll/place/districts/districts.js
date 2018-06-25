// pages/my/register/place/districts/districts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    districts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cityId = options.cityId;
    console.log(cityId)
    var that = this;
    wx.request({
      url: 'http://112.74.43.17/njy/place/' + cityId,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        that.setData({
          districts: res.data.extend.provinces
        })
      }
    }) 
  },
  getdistricts: function(e){
    var index = e.currentTarget.dataset.index;
    getApp().data.qu = this.data.districts[index];
    wx.navigateBack({
      delta: 2
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