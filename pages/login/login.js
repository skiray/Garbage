// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  userInfo:[],
  handleGetUserInfo(e){
    // console.log(e);
    const {userInfo} = e.detail;
    // 数据缓存到本地
    wx.setStorageSync("userdata", userInfo);
    // 返回，从哪来回哪去
    wx.navigateBack({
      delta: 1
    });
      
  }
})