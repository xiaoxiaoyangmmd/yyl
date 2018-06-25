// pages/kb/pages/chuqin/pages/pig/pig.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pig: [
      {
        id:"1",
        tp: "../../../../src/images/suzhong.JPG",
        pigname: "苏钟猪",
        date: "2017-05-23",
        read: "阅读数：789",
      },
      {
        id: "2",
        tp: "../../../../src/images/sushan.JPG",
        pigname: "苏山猪",
        date: "2017-05-23",
        read: "阅读数：789",
      },
      {
        id: "3",
        tp: "../../../../src/images/newpig.JPG",
        pigname: "新淮猪",
        date: "2017-05-23",
        read: "阅读数：789",
      },
      {
        id:"4",
        tp: "../../../../src/images/oldpig.JPG",
        pigname: "老淮猪",
        date: "2017-05-23",
        read: "阅读数：789",
      },
    ]
  },

  readDatail:function (e) {
    var id = e.currentTarget.dataset.id
    console.log("拿过来了", id)
    switch (id) {
      case "1":
        wx.navigateTo({

          url: '/pages/kb/chuqin/pig/xq/xq',
  
        })
        break
      case "2":
        wx.navigateTo({

          url: '/pages/kb/chuqin/pig/xq2/xq2',
        })
        break
      case "3":
        wx.navigateTo({
          url:'/pages/kb/chuqin/pig/xq3/xq3',
        })

        break
      case "4":
        wx.navigateTo({
          url: '/pages/kb/chuqin/pig/xq4/xq4',
        })

        break


    }

  },

})
