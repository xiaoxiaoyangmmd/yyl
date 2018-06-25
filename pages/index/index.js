//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../src/images/00000.jpg',
      '../../src/images/11111.jpg',
      '../../src/images/22222.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  ns:function(){
    wx.navigateTo({
      url: 'ns/ns',
    })
  },
  kj: function () {
    wx.navigateTo({
      url: 'kj/kj',
    })
  },
  zc: function () {
    wx.navigateTo({
      url: 'zc/zc',
    })
  },
  zx: function () {
    wx.navigateTo({
      url: 'zx/zx',
    })
  },
  hq: function () {
    wx.navigateTo({
      url: 'hq/hq',
    })
  },
  xx: function () {
    wx.navigateTo({
      url: 'xx/xx',
    })
  },
  zj: function () {
    wx.navigateTo({
      url: 'zj/zj',
    })
  },
  qx: function () {
    wx.navigateTo({
      url: 'nz/nz',
    })
  },
  weather:function(){
    wx.navigateTo({
      url: 'weather/weather',
    })
  },
  more: function () {
    wx.navigateTo({
      url: 'more/more',
    })
  },
sousuo:function(){
  wx.navigateTo({
    url: 'sousuo/sousuo',
  })
},
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
