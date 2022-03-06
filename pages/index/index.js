// index.js
// 获取应用实例
const app = getApp()
import request from '../../utils/http'
import tool from '../../utils/util.js'
console.log(tool)
Page({
  list:[
    {page:1,top:0},
    {page:1,top:0}
  ],
  tiem:null,
  data: {
    listData:[],
    listDatas:[],
    active:0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChange(event) {
   console.log(event)
  
   const {index} = event.detail
   this.setData({
     active:index
   })
    
   wx.pageScrollTo({
    scrollTop: this.list[index].top, // 滚动到的位置（距离顶部 px）
    duration: 20 //滚动所需时间 如果不需要滚动过渡动画，设为0（ms）
  })

   console.log(this.data.active)
   if(this.list[index].page === 1) {
     console.log(2)
    this.getData(this.list[this.data.active].page)
   }
   
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  async getData(page) {
    try{
      const res = await request({url:this.data.active ? 'https://v2.api.haodanku.com/jd_goods_search?keyword=&min_id='+page+'&apikey=remaitoday' : 'https://v2.api.haodanku.com/supersearch?keyword=&min_id='+page+'&apikey=remaitoday'})
      console.log(this.data.active)
      const listdata = res.data.data
        if(this.data.active){
          this.setData({
            listDatas:[...this.data.listDatas,...listdata]
          })
        }else{
          this.setData({
            listData:[...this.data.listData,...listdata]
          })
        }

        

    }catch(err){
      console.log(err)
      
    }
   
  
  },

    handle(res){
      console.log(res.scrollTop)
       this.list[this.data.active].top = res.scrollTop
       console.log(this.list[this.data.active].top)
    },

    onPageScroll:tool.debounce(function(res){
      console.log(this)
      console.log(res)
      this.list[this.data.active].top = res[0].scrollTop
    },1000),
  // onPageScroll(res) {
  //    if(this.time){
  //     clearTimeout(this.time)
  //    }
  //    this.time = setTimeout(() => {
  //      console.log(res.scrollTop)
  //      this.list[this.data.active].top = res.scrollTop
     
  //    },1000)
     
  // },
  onReachBottom() {
    this.list[this.data.active].page++
    this.getData(this.list[this.data.active].page)
  },
  onLoad() {
    this.getData(1)
    // request({url:'https://v2.api.haodanku.com/supersearch?keyword=&min_id=1&apikey=remaitoday',method:'get'}).then(res => {
    //   this.setData({
    //     listData:res.data.data
    //   })
    // }).catch(err => {
    //   console.log(err)
    // }).finally(() => {
    //   console.log(33)
    // })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
