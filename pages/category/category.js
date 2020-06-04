Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    name: '可回收垃圾',
    picSrc: "../../images/R.jpg",
    explain: '可回收垃圾是指易腐的生物废弃物。主要包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。',
    tip:[
      "※尽量保持清洁干燥，避免污染。",
      "※立体包装物请清空内容，然后压扁投放。",
      "※废纸应保持平整。",
      "※玻璃制品及尖锐物品应包裹后投放。"
    ],
    categoryList:[
      {
        type:0,
        name:"可回收垃圾",
        picSrc:"../../images/R.jpg",
        explain:"可回收垃圾指生活中适合回收利用的垃圾，主要包括废弃电子产品、废弃纸张、废弃塑料、废弃玻璃、废弃金属等五类，是现阶段生活中垃圾分类的主要工作和影响垃圾减量的主要因素。",
        tip:[
          "※尽量保持清洁干燥，避免污染。",
          "※立体包装物请清空内容，然后压扁投放。",
          "※废纸应保持平整。",
          "※玻璃制品及尖锐物品应包裹后投放。"
        ]
      },{
        type:1,
        name:"有害垃圾",
        picSrc:"../../images/H.jpg",
        explain:"有害垃圾，指生活中对人体健康活自然环境能够造成直接或间接危害的物品，必须单独收集、存贮、运输，由环保部门认可的专业机构进行特殊处理。",
        tip:[
          "※杀虫剂等压力罐装容器应排空内容物后投放",
          "※投放时注意轻放。",
          "※易破损的垃圾请包裹后轻放。",
          "※易挥发物品请密封后投放。"
        ]
      },{
        type:2,
        name:"湿垃圾",
        picSrc:"../../images/W.jpg",
        explain:"湿垃圾又称为厨余垃圾,即易腐垃圾,指食材废料、剩菜剩饭、过期食品、瓜皮果核、花市绿植、中药药酒等易腐的生物质生活废弃物。",
        tip:[
          "※纯流质的食物垃圾,如牛奶等,应直接倒入下水口",
          "※有包装的湿垃圾应将包装物去除后分类投放,包装物请投放对应的垃圾容器",
        ]
      },{
        type:3,
        name:"干垃圾",
        picSrc:"../../images/G.jpg",
        explain:"干垃圾又称其它垃圾是指除可回收物、有害垃圾、湿垃圾（厨余垃圾）外的其他生活垃圾,即现环卫体系主要收集和处理的垃圾。",
        tip:[
          "※尽量浙干水分",
          "※难以辨识类别的垃圾投入干垃圾容器内",
        ]
      },
    ],
  }, 
  // 点击事件
  clickList: function (e) {
    // console.log(e)
    let type = e.target.id
    let name = this.data.categoryList[type].name
    let explain = this.data.categoryList[type].explain
    let picSrc = this.data.categoryList[type].picSrc
    let tip = this.data.categoryList[type].tip
    this.setData({
      type: type,
      name: name,
      explain: explain,
      picSrc: picSrc,
      tip: tip
    })
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