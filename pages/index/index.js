// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    value:'',
    value1:200,
    array: ['语文', '数学', '英语', '物理','化学','生物','历史','政治','地理'],
    objectArray: [
      {
        id: 0,
        name: '物理'
      },
      {
        id: 1,
        name: '化学'
      },
      {
        id: 2,
        name: '数学'
      },
      {
        id: 3,
        name: '英语'
      },
      {
        id: 4,
        name: '语文'
      },
      {
        id: 5,
        name: '历史'
      },
      {
        id: 6,
        name: '政治'
      },
      {
        id: 7,
        name: '地理'
      },
      {
        id: 8,
        name: '生物'
      }
    ],
    index: 0,
    rangemin: '0',
    rangemax: '100',
    str: '1'
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
     wx.request({
       url: 'http://localhost:8080/select_all',
        //接口地址
        success:(res) =>{
              // 返回值
            //   console.log(res.data)
              this.setData({
                  value:res.data
              })
            //   console.log(this.data.value)
             
        }
      })
      wx.getUserProfile({})
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
  },
  turn:function(e){
    console.log(e.currentTarget.dataset.oder.fee)
    let item=e.currentTarget.dataset.oder;
    let jsonstr=JSON.stringify(item);
    wx.navigateTo({
      url: '/pages/detial/detial?value='+jsonstr,
    })
  },
  condition_select(){
      console.log(this.data.rangemax)
    wx.request({
        url: 'http://localhost:8080/condition_select', 
        data:{
            index:this.data.index,
            max:this.data.rangemax,
            min:this.data.rangemin
        },//接口地址
         success:(res) =>{
               // 返回值
               console.log(res.data)
               console.log(this.data.value)
               this.setData({
                   value:res.data
               })
               console.log(this.data.value)
         }
       })
  }
})
