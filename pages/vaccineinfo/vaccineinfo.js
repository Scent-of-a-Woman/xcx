
Page({
   data:{
        name:"",
        hospital:"",
        vaccineName:[],
         vaccine:"",
        id:'',
        token:"",
        loginId:"", 
        array:[],
        arr:"",
        state:true,
        repeat:"",
        vaccineId:[]
},
// 疫苗查询
onLoad(query) {
    // 页面加载
     let that=this 
     let vaccineName=that.data.vaccineName
     that.data.id=query.id
     that.data.vaccineId=query.vaccineId
      this.data.arr=query.arr
       if(query.vaccineName){
          vaccineName.push(query.vaccineName)
          console.log(that.data.vaccineName)
       }else{
          that.data.vaccineName=query.array
       }
    my.getStorage({
        key: 'session',
      success: function(res) {
      that.data.token=res.data.token,
      that.data.loginId=res.data.loginId
    }
  })
   my.getStorage({
      key: 'info',
      success: function(response) { 
      that.data.name=response.data.babyName,
      that.data.hospital=response.data.hospitalName
     }
    })
},
switchinfo:function(){
      my.redirectTo({
        url: '../info/info?vaccineName='+this.data.vaccineName+"&vaccineId="+this.data.vaccineId, // 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用
      });
   },
sure:function(){
    my.httpRequest({
      url: 'http://121.42.44.214:8082/whjtys/vaccine/updataJMStatue?id='+this.data.id
      +"&token="+this.data.token+"&loginId="+this.data.loginId+"&vaccineid="+this.data.arr, // 目标服务器 url
       method:'POST',
        dataType:'json',
      success: (res) => {
         let r=res.data.msg
          my.showToast({
         type: 'success',
        content: r,
            });
        },
    });
    my.redirectTo({
      url: '../vaccine/vaccine', // 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用
    });
}
})