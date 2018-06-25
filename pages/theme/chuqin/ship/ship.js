// pages/kb/pages/chuqin/pages/ship/ship.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pig: [

      {
        id: "1",
        tp: "/src/images/sheep1.jpg",
        name: "湖羊",
        date: "2017-05-23",
        read: "阅读数：789",
      },


      {
        id: "2",
        tp: "/src/images/sheep2.jpg",
        name: "羊驼",
        date: "2017-05-23",
        read: "阅读数：289",
      },


      {
        id: "3",
        tp: "/src/images/sheep3.jpg",
        name: "山羊",
        date: "2017-05-23",
        read: "阅读数：689",
      },


      {
        id: "1",
        tp: "/src/images/sheep4.jpg",
        name: "老羊",
        date: "2017-05-23",
        read: "阅读数：559",
      },


      {
        id: "1",
        tp: "/src/images/sheep5.jpg",
        name: "嫩羊",
        date: "2017-05-23",
        read: "阅读数：785",
      },

    ]
  },

  readDatail: function (e) {
    var id = e.currentTarget.dataset.id
    console.log("拿过来了", id)
    switch (id) {
      case "1":
        wx.navigateTo({
          url: '/pages/kb/chuqin/ship/xq/xq',
        })
        break
    }

  },

})
