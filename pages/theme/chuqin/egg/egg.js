// pages/kb/pages/chuqin/pages/pig/pig.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pig: [
      {
        id: "1",
        tp: "/src/images/j2.jpg",
        name: "苏禽绿壳鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        id: "2",
        tp: "/src/images/j2.jpg",
        name: "罗曼褐鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        id: "3",
        tp: "/src/images/j3.jpg",
        name: "京红一号鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        id: "4",
        tp: "/src/images/j3.jpg",
        name: "农大三号小型鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "/src/images/j4.jpg",
        name: "农大5号小型鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "/src/images/j5.jpg",
        name: "新杨黑鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "/src/images/j6.jpg",
        name: "海兰褐鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "/src/images/j7.jpg",
        name: "苏禽绿壳鸡蛋",
        date: "2017-06-23",
        read: "阅读数：789",
      },
    ]
    
  },
  readDatail: function (e) {
    var id = e.currentTarget.dataset.id
    console.log("拿过来了", id)
    switch (id) {
      case "1":
        wx.navigateTo({
          url: '/pages/kb/chuqin/egg/xq1/xq1',
        })
        break
      case "2":
        wx.navigateTo({
          url: '/pages/kb/chuqin/egg/xq2/xq2',
        })
        break
      case "3":
        wx.navigateTo({
          url: '/pages/kb/chuqin/egg/xq3/xq3',
        })
        break
      case "4":
        wx.navigateTo({
          url: '/pages/kb/chuqin/egg/xq4/xq4',
        })
        break
    }
  },
  
})
