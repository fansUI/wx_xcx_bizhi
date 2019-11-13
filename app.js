let that = '';
App({
  domain: '',
  data: {

  },
  onLaunch: function () {
    that = this;
    that.getSystemInfo()
  },
  getSystemInfo(){
    // 获取
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.statusBarHeight)
        that.globalData.statusBarHeight = res.statusBarHeight
      },
    })
    // 获取右上角胶囊按钮的相关信息
    that.globalData.menuInfo = wx.getMenuButtonBoundingClientRect();
    console.log(that.globalData.menuInfo)

  },
  onShow: function (options) {
    
  },
  onHide: function () {
    
  },
  onError: function (msg) {
    
  },
  globalData:{
    menuInfo:{},
    statusBarHeight: 0,
  }
})
