// pages/information/information.js
var app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:'',
        openid:'',
        value:[{
            major:'语文',
            fee:'20'
        }],
        student_id_value:'',
        target:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.setData({
            userInfo:app.globalData.userInfo,
            openid:app.globalData.openid
        })
      },
    
    onShow() {
        wx.request({
          url: 'http://localhost:8080/id_select',
          data:{
            openid:this.data.openid
          },
          success:(res)=>{
              console.log(res)
              this.setData({
                  value:res.data
              })
          }
        })
        wx.request({
            url: 'http://localhost:8080/student_id_select',
            data:{
              openid:this.data.openid
            },
            success:(res)=>{
                console.log(res)
                this.setData({
                    student_id_value:res.data
                })
            }
          })
    },
    turn:function(e){
        console.log(e.currentTarget.dataset.oder.fee)
        let item=e.currentTarget.dataset.oder;
        let jsonstr=JSON.stringify(item);
        let target=this.data.target;
        wx.navigateTo({
          url: '/pages/my_oder/my_oder?value='+jsonstr+'&target='+target,
        })
      },
    change(){
        this.setData({
            target:this.data.target+1
        })
        if(this.data.target>1)
        {
            this.setData({
                target:0
            })
        }
        console.log(this.data.target)
    },
    delete_student(e){
        wx.request({
          url: 'http://localhost:8080/delete_student',
          data:{
            oder_id:e.currentTarget.dataset
          }
        })
    }  
})
// getUserProfile(e) {
    //     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    //     wx.getUserProfile({
    //       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //       success: (res) => {
    //         console.log(res)
    //         this.setData({
    //           userInfo: res.userInfo,
    //           hasUserInfo: true
    //         })
    //         app.globalData.userInfo=this.data.userInfo
    //         console.log(app.globalData.userInfo)
    //       }
    //     })
    //   },
    //   getUserInfo(e) {
    //     // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    //     console.log(e)
    //     this.setData({
    //       userInfo: e.detail.userInfo,
    //       hasUserInfo: true
    //     })
    //   }