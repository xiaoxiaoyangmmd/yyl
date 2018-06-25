Page({

  data: {
    phone:'',
    password:''
  },
  phone:function(e){
      this.setData({
        phone: e.detail.value
      })
  },
  password:function(e){
      this.setData({
        password:e.detail.value
      })
},
  login: function(){
    if(this.data.phone.length==0 ||this.data.password.length==0){
      wx.showToast({
        title: '账号密码不能为空',
        icon:"none",
        mask:true,
      });
    }else{
      console.log(this.data.phone)
      wx.request({
        url:'http://112.74.43.17/njy/login',
        method:"POST",
        data:{
          phone:this.data.phone,
          password:this.data.password
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res);
          console.log(res.data.extend.token)
          wx.switchTab({
            url: '../me',
          });
          // wx.setStorage({
          //   key: "id",
          //   data: "token"
          // });
        }
      })
    }
  },
  rgt: function () {
    wx.navigateTo({
      url: 'register/register',
    })
  },
  forget:function(){
    wx.navigateTo({
      url: 'forget/forget',
    })
  },
 
  onLoad: function (options) {
    
  },

 
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
    
  },





})
