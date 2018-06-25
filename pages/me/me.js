Page({

  /**
   * 页面的初始数据
   */
  data: {
    denglu:"点击登录",
    wdtw:"我的提问",
    login1:false,
    login2:true,
    nickname:"",
    head:"",
    role_name:""
  },
  /**
   * 事件处理函数--登录界面跳转
   */
  login: function(){
    wx.navigateTo({
      url: 'login/login',
    })
  },
  myquest: function(){
    wx.navigateTo({
      url: 'myquest/myquest',
    })
  },
  myanswer:function(){
    wx.navigateTo({
      url: 'myanswer/myanswer',
    })
  },
  mydiscuss:function(){
    wx.navigateTo({
      url: 'mydiscuss/discuss',
    })
  },
  mycollect:function(){
    wx.navigateTo({
      url: 'mycollect/mycollect',
    })
  },
  myattend:function(){
    wx.navigateTo({
      url: 'attend/attend',
    })
  },
  erweima:function(){
    wx.navigateTo({
      url: 'erweima/erweima',
    })
  },
  install: function () {
    wx.navigateTo({
      url: 'install/install',
    })
  },


  onShow:function(){
    var that=this;
    if(res.data.extend.token.length==0){

    }else{
      var nickname1;
      wx.request({
        url: 'http://112.74.43.17/njy/getUserInfo'+res.data.extend.token,
        method:"GET",
        header:{
          'content-type':'application/json'
        },
        success(res){
          console.log(res)
          that.setData({
            login1:true,
            login2:false,
            nickname:res.data.extend.token,
            role_name:res.data.data.role.name
          })
          
          wx.getStorage({
            key: 'key',
            success: function(res) {
              console.log(res.data)
            },
          })
        }
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
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