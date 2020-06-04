Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:[]
  },
  onShow(){
    const userinfo = wx.getStorageSync("userdata");
    this.setData({
      userinfo:userinfo,
    })
    // console.log(userinfo);
  },
  handleAbout(){
      wx.showModal({
        title: '《垃圾分类查询助手V1.1.2》本系统仅供参考具体分类标准应以当地有关部门为准',
        content: '',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '关闭',
        confirmColor: '#000000',
        success: (result) => {
          if (result.confirm) {    
          }
        },
      });   
  }
})