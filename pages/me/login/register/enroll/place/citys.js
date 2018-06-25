// pages/my/register/place/citys.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     citys:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://112.74.43.17/njy/place',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        that.setData({
          citys: res.data.extend.provinces
        })
      }
    }) 
  },
  getcitys: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.citys[index].isleaf==1){
      getApp().data.shi = this.data.citys[index].cityName;
      wx.navigateBack({
        delta:1
      })
    }else{
      getApp().data.shi = this.data.citys[index].cityName;
      wx.navigateTo({
        url: 'districts/districts?cityId=' + this.data.citys[index].cityId,
      })
    }
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