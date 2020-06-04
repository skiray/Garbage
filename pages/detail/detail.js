
Page({

  /**
   * 页面的初始数据
   * 垃圾分类，0为可回收、1为有害、2为厨余(湿)、3为其他(干)
   */
  data: {
    name:"",
    // typeName:[
    //   "可回收垃圾",
    //   "有害垃圾",
    //   "湿垃圾",
    //   "干垃圾"
    // ],
    // 图片路径
    imgSrcGroup:[
      "../../images/R.jpg","../../images/H.jpg",
      "../../images/W.jpg","../../images/G.jpg",
    ],
    // 存放返回的结果
    newslist:[
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 应用缓存
    const getInfo=wx.getStorageSync("searchInfo");
    // 判断本地缓存是否存在
    if(!getInfo){
      const name=options.name;
      this.setData({
        name
      })
      wx.request({
        url: 'https://api.tianapi.com/txapi/lajifenlei/index?key=apikey&word=' + name,
        data: {},
        header: {'content-type':'application/json'},
        success: (res) => {
          this.setData({
            newslist:res.data.newslist[0],
          })
        },
      });
    }else{
      // 判断缓存是否过期
      if(Date.now() - getInfo.time>1000 * 60 ){
        const name=options.name;
        this.setData({
          name
        })
        wx.request({
          url: 'https://api.tianapi.com/txapi/lajifenlei/index?key=apikey&word=' + name,
          data: {},
          header: {'content-type':'application/json'},
          success: (res) => {
            this.setData({
              newslist:res.data.newslist[0],
            })
          },
        });
      }else{
      let newslist=JSON.parse(getInfo.data)
      
      this.setData({
        newslist:newslist.newslist[0],
      })
      }
    }
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

  }
})