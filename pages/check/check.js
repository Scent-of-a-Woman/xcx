Page({
    data:{
        token:"",
        loginId:"",
        code:"123123123123111",
        select:'none',
        people:"1",
        selectt:"block"
    },
    onLoad(query){
      let that=this
         my.getStorage({
         key: 'session',
         success: function(res) {
        that.data.token=res.data.token
        that.data.loginId=res.data.loginId
      }
    })
    },
    // 点击加人数
    add:function(){
        if(this.data.people==5){
              return
         }
        this.data.people++
        this.setData({
            people:this.data.people
        })
    },
    // 点击减人数
     reduce:function(){
         if(this.data.people==1){
              return
         }
        this.data.people--
        this.setData({
            people:this.data.people
        })
    },
    // 点击扫描
    start:function(e){
        my.scan({
            type: 'qr',
            success: (res) => { 
         this.setData({
            selectt:'none',
            select:'block'
        })                  
                this.data.code=res.code
                this.setData({
                    code:res.code
                    })
                 },
                });
    },
  sure:function(){
      let _this=this
    my.confirm({
        content:'确认是否扫码核销体检券',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        success:function(result){
            if(result.confirm){
                my.httpRequest({
    url: "http://whjtys.premier-tech.cn/whjtys/card?billNo="+_this.data.code+"&usesNum="+_this.data.people+"&token="+_this.data.token+"&loginId="+_this.data.loginId,
    method:'POST',
    dataType:'json',
    success:function(response){
                my.confirm({
                     content:response.data.msg,
                     confirmButtonText: '知道了',
                     cancelButtonText: '返回',
                     success:function(result){            
                          
                     }
                })
            }
    })
            }
        },
    })
  },
  return_home:function(){
      let _this=this
        _this.setData({
                    selectt:'block',
                    select:'none',
                })
  }
      
})