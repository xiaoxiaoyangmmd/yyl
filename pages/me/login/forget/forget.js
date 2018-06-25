Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    yanzheng: '',
    code: ''
  },
  iphone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  yanzheng: function (e) {
    this.setData({
      yanzheng: e.detail.value
    })
  },
  huoqu: function () {
    // if(ee){
    //   wx.showToast({
    //     title: '验证码错误',
    //     icon: "none",
    //     mask: true,
    //   })
    // }else{
    wx.request({
      url: 'http://112.74.43.17/njy/codeByPhone',
      method: "POST",
      data: {
        phone: this.data.phone,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.code);
        console.log(res.extend.code)
      }
    })
  },
  // next: function () {
  //   if (this.data.yanzheng == 0) {
  //     wx.showToast({
  //       title: '请输入验证码',
  //       icon: "none",
  //       mask: true,
  //     })
  //   } else if (this.data.yanzheng == this.data.code) {
  //     wx.navigateTo({
  //       url: 'enroll/enroll',
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '验证码错误',
  //       icon: "none",
  //       mask: true,
  //     }) 
  //   }
  // },
  next: function () {
    wx.navigateTo({
      url: 'password/password',
    })
  },

  onLoad: function (options) {

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