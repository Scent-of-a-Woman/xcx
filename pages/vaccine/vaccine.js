// var app = getApp()
Page({ 
 data:{
        selected:true,
        selected1:false,
        selectedt:false,
        info:[],
        complete:[],
        reject:[],
        searchData:"",
        token:"",
        loginId:"",
        pagenum:"1",
        one:true,
        two:true,
        three:true,
         four:true,
         five:true,
          six:true,
        id:"",
         m:true,
        signstate:false,
        completestate:true,
        rejectstate:false,   
    },
selected:function(e){ 
    this.data.searchData=""
     this.data.one=true
     this.data.two=false 
     this.data.three=false        
     this.requesting()
      this.setData({
         searchData:this.data.searchData
     })
    },
selected1:function(e){
    this.data.searchData=""
        this.data.two=true
     this.data.three=false 
     this.data.one=false
    this.requested()
     this.setData({
         searchData:this.data.searchData
     })
      },
selectedt:function(e){
    this.data.searchData=""
     this.data.three=true
    this.data.two=false 
     this.data.one=false
        this.requestDown()
         this.setData({
         searchData:this.data.searchData
     })
    },
myFunction:function(e){
     if(this.searchData!=e.detail.value){
            this.data.m=true
            console.log(e.detail.value)
        } 
        this.setData({
            searchData:e.detail.value
        })
    },
 downsign:function(){
     switch(this.data.id){
           case 1:
           my.redirectTo({url: '../sign/sign'});
           break;
           case 3:
           my.redirectTo({url: '../sign/sign'});
           break;
           case 4:
           my.redirectTo({url: '../sign/sign'});
           break;
           case 7:
            my.alert({title: '您暂无权限'});
           break;
        }
    } , 
downtest:function(){
    console.log(this.data.id)
     switch(this.data.id){
           case 1:
           my.redirectTo({url: '../test/test'});
           break;
           case 3:
           my.redirectTo({url: '../test/test'});
           break;
           case 4:
            my.redirectTo({url: '../test/test'});
           break;
           case 7:
            my.alert({title: '您暂无权限'});
           break;
          
        }
    },
downvaccine:function(){
  switch(this.data.id){
           case 1:
           my.redirectTo({url: '../vaccine/vaccine'});
           break;
           case 3:
           my.redirectTo({url: '../vaccine/vaccine'});
           break;
           case 4:
           my.redirectTo({url: '../vaccine/vaccine'});
           break;
           case 7:
           my.redirectTo({url: '../vaccine/vaccine'});
           break;
         
        }
    
    },   
defaultSign:function(){
    if(this.data.m){
        let num=this.data.info.length
        let returnData=this.data.info
            returnData.splice(0,num)
        }
      if(this.data.searchData.length==0){
           this.requesting()
           return;
      }
        this.data.four=true
        this.data.one=false
         this.data.two=false
          this.data.three=false
           this.data.five=false
            this.data.six=false
    my.httpRequest({
       url: "http://whjtys.premier-tech.cn/whjtys/vaccine/JMOrderManager?searchKey=" + this.data.searchData
      +"&token="+this.data.token+"&loginId="+this.data.loginId+"&pageNum="+this.data.pagenum, // 目标服务器 url
     method:'GET',
     dataType:'json', 
     success: (response) => {
    let returnData=this.data.info
    let userdata=response.data.pagehelper.list
     let len=response.data.pagehelper.total
       if(returnData.length>=len){
            return;
        }
     for(let i=0;i<userdata.length;i++){
         returnData.push(userdata[i])
        }
          this.setData({
              info:returnData
            })
            this.data.m=false
      },
    });
},
defaultComplete:function(){
 if(this.data.m){
         let num=this.data.complete.length
        let returnData=this.data.complete
            returnData.splice(0,num)
        }
    if(this.data.searchData.length==0){
           this.requested()
           return;
      }
        this.data.four=false
        this.data.one=false
         this.data.two=false
          this.data.three=false
           this.data.five=true
            this.data.six=false
    my.httpRequest({
      url: "http://whjtys.premier-tech.cn/whjtys/vaccine/JMOrderManager?searchKey=" + this.data.searchData
      +"&token="+this.data.token+"&loginId="+this.data.loginId+"&pageNum="+this.data.pagenum, // 目标服务器 url
     method:'GET',
     dataType:'json', 
     success: (response) => {
   let returnData=this.data.complete
    let userdata=response.data.pagehelper.list
     let len=response.data.pagehelper.total
       if(returnData.length>=len){
            return;
        }
     for(let i=0;i<userdata.length;i++){
         returnData.push(userdata[i])
        }
          this.setData({
              complete:returnData
            })
            this.data.m=false
      },
    });
},
defaultReject:function(){
  if(this.data.m){
         let num=this.data.reject.length
        let returnData=this.data.reject
            returnData.splice(0,num)
        }
    if(this.data.searchData.length==0){
           this.requestDown()
           return;
      }
        this.data.four=false
        this.data.one=false
         this.data.two=false
          this.data.three=false
           this.data.five=false
            this.data.six=true
    my.httpRequest({
     url: "http://whjtys.premier-tech.cn/whjtys/vaccine/JMOrderManager?searchKey=" + this.data.searchData
      +"&token="+this.data.token+"&loginId="+this.data.loginId+"&pageNum="+this.data.pagenum, // 目标服务器 url
     method:'GET',
     dataType:'json', 
     success: (response) => {
   let returnData=this.data.reject
    let userdata=response.data.pagehelper.list
     let len=response.data.pagehelper.total
       if(returnData.length>=len){
            return;
        }
     for(let i=0;i<userdata.length;i++){
         returnData.push(userdata[i])
        }
          this.setData({
              reject:returnData
            })
            this.data.m=false
      },
    });
},
//  通过签约
sureData:function(e){ 
    let  vaccineId=[]
      let ID= e.target.dataset.vaccineId
      vaccineId.push(ID)
      console.log(vaccineId)
       my.setStorage({
  key: 'info',
  data: {
    babyName:e.target.dataset.babyName,
    hospitalName:e.target.dataset.hospitalName,
    vaccineName: e.target.dataset.vaccineName,
  }
});
     my.redirectTo(
         {
             url: "../vaccineinfo/vaccineinfo?id="+e.target.dataset.id+"&babyName="+e.target.dataset.babyName
             +"&hospitalName="+e.target.dataset.hospitalName+"&vaccineName="+e.target.dataset.vaccineName+"&vaccineId="+vaccineId,     
        }
        );
    
},
// 驳回操作
// http://192.168.0.127:8081/whjtys/signed/signingBack
//  console.log(e.target.dataset.id)    
  
rejectData:function(e){
      my.httpRequest({
      url: 'http://whjtys.premier-tech.cn/whjtys/vaccine/loseJMStatue?id='+e.target.dataset.id+"&token="+this.data.token+"&loginId="+this.data.loginId, // 目标服务器 url
       method:'POST',
      dataType:'json',
      success: (res) => {
          let r=res.data.msg
          my.showToast({
         type: 'success',
         content: r,
            });
          this.data.info=[]
         this.requesting()
      },
    });
},
// 页面被拉到底部
onReachBottom() {
 if(this.data.pagenum){
    this.data.pagenum++
 } 
 if(this.data.one){
      this.requesting()
    }else if(this.data.two){
    this.requested() 
    }else if(this.data.three){
        this.requestDown()
    }
 if(this.data.four){
     this.defaultSign()
 }  else if(this.data.five){
       this.defaultComplete()
    }else if(this.data.six){
      this.defaultReject()
    } 
},
onLoad(){
 my.setNavigationBar({
    title: '疫苗',
   reset:true
  })
this.requesting()
},
// 签约
requesting:function(){
let that=this  
that.data.one=true
that.data.two=false
that.data.three=false
that.data.five=false
that.data.six=false
that.data.four=false
   my.getStorage({
  key: 'session',
  success: function(res) {
      that.data.token=res.data.token,
      that.data.loginId=res.data.loginId
      that.data.id=res.data.roleId
    my.httpRequest({
  url: "http://whjtys.premier-tech.cn/whjtys/vaccine/newJMOrder?token="+res.data.token
  +"&loginId="+res.data.loginId+"&pageNum="+that.data.pagenum,
  method:'GET',
  dataType:'json',
  success:function(response){
      
      console.log(response)
     let returnData=that.data.info
     let userdata=response.data.pagehelper.list
     for(let i=0;i<userdata.length;i++){
         returnData.push(userdata[i])
     }
       that.setData({
            selected1:false,
            selected:true,
            selectedt:false,
            info:returnData
        })
  },
  fail:function(response){

  }
}) 
  }
});
    }, 
//  已完成
requested:function(){
     let  that=this  
          that.data.one=false
that.data.two=true
that.data.three=false
that.data.five=false
that.data.six=false
that.data.four=false    
    my.httpRequest({
  url: "http://whjtys.premier-tech.cn/whjtys/vaccine/JMOrderManager?token="+that.data.token+"&loginId="+that.data.loginId+"&pageNum="+that.data.pagenum,
  method:'GET',
  dataType:'json',
  success:function(response){
      console.log(response)
       let returnData=that.data.complete
     let userdata=response.data.pagehelper.list
     for(let i=0;i<userdata.length;i++){
         returnData.push(userdata[i])
     }
       that.setData({
            selected:false,
            selected1:true,
            selectedt:false,
            complete:returnData
        })
  },
  fail:function(response){

  }
}) 
}, 
// 驳回
requestDown:function(){
     let  that=this 
               that.data.one=false
that.data.two=false
that.data.three=true
that.data.five=false
that.data.six=false
that.data.four=false          
   my.httpRequest({
  url: "http://whjtys.premier-tech.cn/whjtys/vaccine/loseJMOrderManager?token="+that.data.token+"&loginId="+that.data.loginId+"&pageNum="+that.data.pagenum,
  method:'GET',
  dataType:'json',
  success:function(response){
      console.log(response)
       let returnData=that.data.reject
     let userdata=response.data.pagehelper.list
     for(let i=0;i<userdata.length;i++){
         returnData.push(userdata[i])
     }
       that.setData({
             selected:false,
            selected1:false,
            selectedt:true,
            reject:returnData
        })
  },
  fail:function(response){

  }
}) 
}
})