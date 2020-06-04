Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    catePicList:[
      {
        name:"G.jpg",
        type:3
      },
      {
        name:"W.jpg",
        type:2
      },
      {
        name:"H.jpg",
        type:1
      },
      {
        name:"R.jpg",
        type:0
      }
    ],
    isHidden:false,
    isShow:false,
    // base64
    img:"",
    imgRes:[
     
    ],
  },
  toSearch(e){
    this.setData({
      isHidden:false,
      isShow:false
    })
  },
  chooseImg(e){
    // console.log(e);
    wx.chooseImage({
      // 最大数量
      count: 1,
      // 图片格式，原图，压缩
      sizeType: ['original', 'compressed'],
      // 来源 相册，相机
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 把获取的图片转为base64
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: (res) => {
            console.log(res);
            let img= "data:image/png;base64,"+res.data;
            this.setData({
              // 列表拼接
              img
            })
            // console.log(this.data.img)
          },
        });
        wx.showLoading({
          title: "识别图片请稍等",
          mask: true,
        });
        var that =this;
        setTimeout(function(){
          //循环代码
          console.log("------------")
          wx.request({
            url: 'https://api.tianapi.com/txapi/imglajifenlei/index',
            data: {
              "key":"apikey",
              "img":that.data.img
            },
            header: {'content-type':'application/x-www-form-urlencoded'},
            method: 'POST',
            dataType: 'json',
            success: (res) => {
              console.log("OK!!!");
              wx.hideLoading();
              // clearTimeout(timerName)
              console.log(res);
              that.setData({
                imgRes:res.data.newslist,
                isHidden:true,
                isShow:true
              })
              
            },
          });
        }, 4000)
        
      },
    });
  },
  resItemDetail(e){
    const index=e.currentTarget.dataset.id;
    wx.showModal({
      title: this.data.imgRes[index].name,
      content: this.data.imgRes[index].lajitip,
      showCancel: false,
      confirmText: '确定',
      confirmColor: "#00BB6A",
      success: (result) => {
        if (result.confirm) {
        }
      },
    });
      
      
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