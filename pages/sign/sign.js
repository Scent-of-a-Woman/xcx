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
        searchData2:"",
        searchData3:"",
        token:"",
        loginId:"",
        pagenum:"1",
        one:true,
        two:true,
        three:true,
        four:true,
        id:"",
        m:true,
        five:true,
        six:true,
        // signstate:true,
        // completestate:false,
        // rejectstate:false,
    },
selected:function(e){ 
     this.requesting()
     this.data.one=true
     this.data.two=false 
     this.data.three=false 
        console.log(this.data.searchData)
    },
selected1:function(e){
    this.data.two=true
     this.data.three=false 
     this.data.one=false
      this.requested()
     this.data.four=false  
     this.data.five=true
     this.data.six=false 
         console.log(this.data.searchData2)
      },
selectedt:function(e){
    this.requestDown()
    this.data.three=true
    this.data.two=false 
     this.data.one=false
      this.data.four=false  
       this.data.five=false
        this.data.six=true 
         console.log(this.data.searchData3)
    },
myFunction:function(e){
        if(this.data.searchData!=e.detail.value){
            this.data.m=true
        } 
        this.setData({
            searchData:e.detail.value,
        })
    },
    myFunction2:function(e){
        if(this.data.searchData2!=e.detail.value){
            this.data.m=true
        } 
        this.setData({
            searchData2:e.detail.value,
        })
    },
    myFunction3:function(e){
        if(this.data.searchData3!=e.detail.value){
            this.data.m=true
        } 
        this.setData({
            searchData3:e.detail.value
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
           case 5:
           my.redirectTo({url: '../sign/sign'});
           break;
           case 12:
           my.redirectTo({url: '../sign/sign'});
           break;
        }
    } , 
downtest:function(){
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
           case 5:
           my.alert({title: '您暂无权限'});
           break;
           case 12:
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
           case 5:
           my.alert({title: '您暂无权限'});
           break;
           case 12:
           my.alert({title: '您暂无权限'});
           break;
        }
    },
//搜索 
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
      url: "http://whjtys.premier-tech.cn/whjtys/signed/newSigning?searchKey=" + this.data.searchData
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
    if(this.data.searchData2.length==0){
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
      url: "http://whjtys.premier-tech.cn/whjtys/signed/signingManager?searchKey=" + this.data.searchData2
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
    if(this.data.searchData3.length==0){
           this.requestDown()
           return;
      }
        this.data.four=false
        this.data.one=false
         this.data.two=false
          this.data.three=false
           this.data.five=false
            this.data.six=true
   if(this.data.searchData3){
        my.httpRequest({
      url: "http://whjtys.premier-tech.cn//whjtys/signed/backManager?searchKey=" + this.data.searchData3
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
   }else{
       this.requestDown()
   }
},
//  通过签约
sureData:function(e){ 
    if(this.data.id==5||this.data.id==12||this.data.id==1){
            my.httpRequest({
      url: 'http://whjtys.premier-tech.cn/whjtys/signed/updateStatue?ids='+e.target.dataset.id
      +"&token="+this.data.token+"&loginId="+this.data.loginId, // 目标服务器 url
       method:'POST',
        dataType:'json',
      success: (response) => {
           let r=response.data.msg
            my.showToast({
         type: 'success',
        content: r,
            });
          this.data.info=[]
         this.requesting()
        },
    });
    }else{
        my.alert({
          title: '暂无权限', // alert 框的标题
          success: (res) => {
            
          },
        });
    }
   
},
// 驳回操作
rejectData:function(e){
    if(this.data.id==5||this.data.id==12||this.data.id==1){
          my.httpRequest({
      url: 'http://whjtys.premier-tech.cn/whjtys/signed/signingBack?id='+e.target.dataset.id+"&token="+this.data.token+"&loginId="+this.data.loginId, // 目标服务器 url
       method:'POST',
      dataType:'json',
      success: (response) => {
          let r=response.data.msg
          my.showToast({
         type: 'success',
        content: r,
            });
         this.data.info=[]
         this.requesting()
      },
    });
    }else{
        my.alert({
          title: '暂无权限', // alert 框的标题
          success: (res) => {
            
          },
        });
    }
    
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
    title: '签约',
   reset:true
})
this.data.completestate=false
this.data.rejectstate=false
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
      that.data.id=res.data.roleId
      that.data.token=res.data.token,
      that.data.loginId=res.data.loginId
    my.httpRequest({
  url: "http://whjtys.premier-tech.cn/whjtys/signed/newSigning?token="+res.data.token
  +"&loginId="+res.data.loginId+"&pageNum="+that.data.pagenum,
  method:'GET',
  dataType:'json',
  success:function(response){
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
  url: "http://whjtys.premier-tech.cn/whjtys/signed/signingManager?token="+that.data.token+"&loginId="+that.data.loginId+"&pageNum="+that.data.pagenum,
  method:'GET',
  dataType:'json',
  success:function(response){
      that.data.complete=[]
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
  url: "http://whjtys.premier-tech.cn/whjtys/signed/backManager?token="+that.data.token+"&loginId="+that.data.loginId+"&pageNum="+that.data.pagenum,
  method:'GET',
  dataType:'json',
  success:function(response){
       that.data.reject=[]
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
}) 
}
})