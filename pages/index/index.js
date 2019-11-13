const app = getApp();
let that = '';

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    menuInfo: app.globalData.menuInfo,
    imgUrls: [
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2235737378,610749285&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1684328808,3706438544&fm=26&gp=0.jpg",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2761060568,2814365572&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2029394679,2389119056&fm=26&gp=0.jpg",
      "http://img2.imgtn.bdimg.com/it/u=1451330793,2242997567&fm=26&gp=0.jpg",
      "http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=1457704519,3529830056&fm=26&gp=0.jpg"
    ],
    types: [
      {
        icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1476736356,1982198249&fm=26&gp=0.jpg',
        title: '聊天背景'
      },
      {
        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556723145077&di=0c43f65226f35aff90713175c4fc0e88&imgtype=0&src=http%3A%2F%2Fp2.pstatp.com%2Flarge%2F1253%2F8577488335',
        title: '头像'
      },
      {
        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556722983835&di=f2c05cb761e22325544b2105a1b40554&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180303%2F02%2F1520014014-XtwmvPeqIY.gif',
        title: '表情'
      },
      {
        icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3947139399,3932772567&fm=26&gp=0.jpg',
        title: '潮流好物'
      }
    ],
    news: [
      {
        text: '精选',
        color: '#2CA6FC',
        bgColor: '#D9EEFF'
      },
      {
        text: '最新',
        color: '#909090',
        bgColor: '#F8F8F8'
      },
      {
        text: '主题套图',
        color: '#909090',
        bgColor: '#F8F8F8'
      },
      {
        text: '天生一对',
        color: '#909090',
        bgColor: '#F8F8F8'
      }
    ],
    lists: [
      'https://i04picsos.sogoucdn.com/9f305f99530476f8',
      'https://i04picsos.sogoucdn.com/797ea9aaa7ef9926',
      'https://i02picsos.sogoucdn.com/61109ec74ca66421',
      'https://i04picsos.sogoucdn.com/5a7db4b5e38eaa9b',
      'https://i04picsos.sogoucdn.com/746ea49db01c9f48',
      'https://i02picsos.sogoucdn.com/6950760959e7cc87',
      'https://i01picsos.sogoucdn.com/00898373836744b6',
      'https://i03picsos.sogoucdn.com/e1bbe9bc828e39da',
      'https://i04picsos.sogoucdn.com/7032932f99a393fc',
      'https://i03picsos.sogoucdn.com/2a46c8221e160c65',
      'https://i03picsos.sogoucdn.com/af91c84f4dcdd52b',
      'https://i02picsos.sogoucdn.com/64f8e14146de9928',
      'https://i01picsos.sogoucdn.com/3de9a6a58a4b6b8d',
      'https://i03picsos.sogoucdn.com/cda74d291e381c07',
      'https://i02picsos.sogoucdn.com/ceedfc784fa95d71',
      'https://i03picsos.sogoucdn.com/538e53838b37fbe7',
      'https://i03picsos.sogoucdn.com/aeb2ec4de80bd184',
      'https://i02picsos.sogoucdn.com/50fb89437b4bafca',
      'https://i04picsos.sogoucdn.com/d597bd837a8ce24f',
      'https://i04picsos.sogoucdn.com/0867cdf9878354aa'
    ]
  },
  onLoad: function (options) {
    
  },
  handleClick(){
    console.log(99)
  },
  onReady: function () {
    
  },
  onShow: function () {
    
  },
  onHide: function () {
    
  },
  onUnload: function () {
    
  },
  onPullDownRefresh: function () {
    
  },
  onReachBottom: function () {
    
  },
  onShareAppMessage: function () {
    
  }
})