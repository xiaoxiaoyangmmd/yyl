Page({

  /**
   * 页面的初始数据
   */
  data: {
    xzlxview1: false,
    xzlxview2: true,
    phone: '',
    rylx: '',
    shi: '',
    qu: '',
    zhen: '',
    input_nickname: '',
    input_password1: '',
    input_password2: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      phone: getApp().data.phone,
    })
    if (getApp().data.rylx.length != 0) {
      this.setData({
        rylx: getApp().data.rylx,
        xzlxview1: true,
        xzlxview2: false,
      })
    } else {
      this.setData({
        xzlxview1: false,
        xzlxview2: true,
      })
    };

    if (getApp().data.shi.length != 0) {

      this.setData({
        shi: getApp().data.shi,
        qu: getApp().data.qu,
        xzdqview1: true,
        xzdqview2: false,
      })
    } else {

      this.setData({
        xzdqview1: false,
        xzdqview2: true,
      })
    }
  },

  xzlx: function () {
    wx.navigateTo({
      url: 'userType/userType'
    })
  },
  xzdq: function () {
    getApp().data.shi = '',
      getApp().data.qu = '',
      wx.navigateTo({
        url: 'place/citys'
      })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (getApp().data.rylx.length != 0) {
      this.setData({
        rylx: getApp().data.rylx,
        xzlxview1: true,
        xzlxview2: false,
      })
    } else {
      this.setData({
        xzlxview1: false,
        xzlxview2: true,
      })
    }

    if (getApp().data.shi.length != 0) {

      this.setData({
        shi: getApp().data.shi,
        qu: getApp().data.qu,
        xzdqview1: true,
        xzdqview2: false,
      })
    } else {

      this.setData({
        xzdqview1: false,
        xzdqview2: true,
      })
    }
  },
  phone: function (e) {
    this.setData({
      phone:e.detail.value
    })
  },
  input_nickname: function (e) {
    this.setData({
      input_nickname: e.detail.value
    })
  },
  input_password1: function (e) {
    this.setData({
      input_password1: e.detail.value
    })
  },
  input_password2: function (e) {
    this.setData({
      input_password2: e.detail.value
    })
  },

  register: function () {
    if (this.data.input_nickname.length == 0) {
      wx.showToast({
        title: '姓名未填写',
        icon: "none",
        mask: true,
      })
    }
    else if (this.data.phone.length != 11){
      wx.showToast({
        title: '手机号未正确填写，请重新输入',
        icon: "none",
        mask: true,
      })
    }
    else if (this.data.input_password1 == this.data.input_password2&&this.data.input_password1.length!=0) {
      wx.request({
        url: 'http://112.74.43.17/njy/Register',
        data: {
          "nickname": this.data.input_nickname,
          "fileName": "1.png",
          "phone": getApp().data.phone,
          "password": this.data.input_password2,
          "identity": getApp().data.identity,
          "place": "1"
        },
        method: "POST",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res),
            wx.navigateTo({
              url: '../../login',
            })
          wx.setStorage({
            key: "id",
            data: "token"
          });
          wx.showToast({
            title: '注册成功',
            icon: "none",
            mask: true,
          })
        }
      })
    } else {
      wx.showToast({
        title: '密码输入有问题',
        icon: "none",
        mask: true,
      })
    }
  },

})
