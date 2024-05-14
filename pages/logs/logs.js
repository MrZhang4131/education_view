import Toast from '@vant/weapp/toast/toast'

var app=getApp()
Page({
  data: {
    columns: ['语文', '数学', '英语', '物理','化学','生物','历史','政治','地理'],
    indexout:'1',
    fee:'',
    addr:'',
    time:'',
    openid:'test',
    text:'',
    telephone:''
  },

  onChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
    this.setData({
        indexout:index+1
    })
    console.dir(this.data.indexout);
  },

  oders(){
    wx.request({
        
        url: 'http://localhost:8080/insert_oder', //接口地址
        data:{
            text:this.data.text,
            index:this.data.indexout,
            fee:this.data.fee,
            addr:this.data.addr,
            time:this.data.time,
            openid:this.data.openid,
            telephone:this.data.telephone
        },
         success:(res) =>{
               // 返回值
               var that=this
               console.log(res),
               this.setData({
                 str:res.data,
                 
               })
         }
       })
  },
  onLoad(){},
  onShow:function(e){
    var that=this
    this.setData({
        openid:app.globalData.openid
    })
  },
});
