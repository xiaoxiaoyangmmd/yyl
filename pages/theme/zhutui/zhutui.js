// pages/kb/pages/chuqin/pages/pig/pig.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skill: [
      { 
        id:"1",
        tp: "../../../src/images/skill.png",
        name: "母猪产后怎么消炎处理，采食量奶水才好",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        id: "2",
        tp: "../../../src/images/skill.png",
        name: "猪流行性腹泻的防控与治疗措施",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
    
        tp: "../../../src/images/skill.png",
        name: "食用菌基质循环利用技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "稻麦绿色增产攻关模式与配套技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "优良食味稻米清洁高效生产技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "优质水稻全程安全用药规划技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "小麦机械均衡播高产栽培技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "特用玉米高效生产技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "油菜机械化种植技术",
        date: "2017-06-23",
        read: "阅读数：789",
      },
      {
        tp: "../../../src/images/skill.png",
        name: "稻麦田全程减药控草技术",
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
          url: '/pages/kb/zhutui/xq1/xq1',
        })
        break
      case "2":
        wx.navigateTo({
          url: '/pages/kb/zhutui/xq2/xq2',
        })
        break
    }
  },
  
})
