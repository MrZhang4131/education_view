// pages/test/test.js
var app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        a:'111',
        b:'index',
        url:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    // onLoad:function(e){
    //     var that=this
    //     console.log(app.globalData.text)
    //     app.globalData.text ='222'
    //     console.log(app.globalData.text)
    //     this.setData({
    //         a:app.globalData.text
    //     })
    //   },
    

   goto(){
       wx.navigateTo({
         url: '/pages/detial/detial?id=value',
       })
   }
})
 // /**
    //  * 生命周期函数--监听页面初次渲染完成
    //  */
    // onReady() {

    // },

    // /**
    //  * 生命周期函数--监听页面显示
    //  */
    // onShow() {

    // },

    // /**
    //  * 生命周期函数--监听页面隐藏
    //  */
    // onHide() {

    // },

    // /**
    //  * 生命周期函数--监听页面卸载
    //  */
    // onUnload() {

    // },

    // /**
    //  * 页面相关事件处理函数--监听用户下拉动作
    //  */
    // onPullDownRefresh() {

    // },

    // /**
    //  * 页面上拉触底事件的处理函数
    //  */
    // onReachBottom() {

    // },

    // /**
    //  * 用户点击右上角分享
    //  */
    // onShareAppMessage() {

    // }