//Page Object
Page({
  data: {
    inputValue:"",
    searchItem:[
    
    ],
    
    hotSearch:[
    ],
    hotItemData:[
    ]
  },
  onLoad: function(options) {
    // 加载热搜
    wx.request({
      url: 'https://api.tianapi.com/txapi/hotlajifenlei/index',
      data: {"key":"apikey"},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      success: (res) => {
        // console.log(res.data)  
        this.setData({
          hotSearch:res.data.newslist
        })
      }, 
    });
  },
  onReady: function() {
    
  },
  // 动态获取输入框的内容
  inputing(e){
    this.setData({
      inputValue: e.detail.value,
    });
  },
  // 清空输入框  
  clearInput(){
    this.setData({
      inputValue: "",
      searchItem:null,
      // submitInput: false
    });
  },
  // 提交搜索请求
  submitInput(){
    // 判断是否为空
    if (this.data.inputValue == " ") {
      wx.showToast({
        title: '请先输入',
        icon: "none",
        duration: 1500
      })
      return;
    }
    let that = this;
    wx.request({
      url: 'https://api.tianapi.com/txapi/lajifenlei/index?key=apikey&word=' + this.data.inputValue,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        let data = res.data;
        // 判断请求状态码
        if (data.code == 200 && data.newslist.length > 0) {
          // 缓存数据
          wx.setStorageSync("searchInfo",
          {
            time:Date.now(),data:JSON.stringify(res.data)
          })
          that.setData({
            searchItem: data.newslist
          })
        } else {
          wx.showModal({
            showCancel: false,
            title: '没有找到',
            content: '该物品暂未收录，或许您可以更换关键词🙂',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      }
    })
  },
  // 点击热搜跳转事件
  hotToShowPage(e){
    const name=e.currentTarget.dataset.name;
    wx.navigateTo({
        url: '/pages/detail/detail?name='+name,
      success: res => {
        console.log(res);
      },
      fail: err => {
      }
    })
      
  },
  // 搜索列表跳转
  toShowPage(e){
    const flag=e.currentTarget.dataset.flag;
    wx.navigateTo({
      url: '/pages/detail/detail?flag='+flag,
      success: (result) => {       
      },
    });
 
  },
});
  