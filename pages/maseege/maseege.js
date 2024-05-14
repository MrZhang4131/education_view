// pages/maseege/maseege.js
var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: '',
        str: '1',
        code: '',
        id:'',
        openid:''
    },
    


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.login
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.login
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    //登录接口
    login(e) {
        
        wx.login({
           
            success:(res) =>{
                // 返回值
                
                console.log(res.code),
                this.setData({
                 code:res.code,
               })
               wx.request({
        
                url: 'http://124.70.135.23:8080/demo/testopenid', //接口地址
                
                data:{
                    code:this.data.code,
                },
                 success:(res) =>{
                       // 返回值
                       var that=this
                       console.log(res),
                       this.setData({
                         openid:res.data,
                       })
                       app.globalData.openid=this.data.openid
                       console.log(app.globalData.openid)
                 }
               })
          }
    })
    wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
        //   console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          app.globalData.userInfo=this.data.userInfo
          console.log(app.globalData.userInfo)
          wx.switchTab({
            url: '/pages/information/information',
          })
        }
      })
    
}
})