Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
  },
  /**
  * 选择函数
  */
  selected: function (event) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false,
      selected3: false,
    })
  },
  selected1: function (event) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    })
  },
  selected2: function (event) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    })
  },
  selected3: function (event) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    })
  },
  selected4: function (event){
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
   
    })
  },

})