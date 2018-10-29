// var app = getApp()
Page({
data: {
      roleid:"",
      msg:""
      },
  formSubmit: function(e) {
    let that=this
  let account=e.detail.value.account
  let pwd=e.detail.value.pwd
my.httpRequest({
  url: 'http://whjtys.premier-tech.cn/whjtys/logins',
  method:'POST',
  dataType:'json',
  data:{
    account:account,
    pwd:pwd
  },
success:function(response){
  my.setStorage({
  key: 'session',
  data: {
    loginId: response.data.loginId,
    token:response.data.token,
    roleId:response.data.roleId
  }
});
 that.data.roleid=response.data.roleId
    if(response.data.roleId ==null){
       that.data.msg=response.data.mess
      my.alert({
        title: that.data.msg, // alert 框的标题
        success: (res) => {
          
        },
      });
    }else{
      switch(that.data.roleid){
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
            case 14:
           my.redirectTo({url: '../check/check'});
           break;
          //   case 6:
          //  my.redirectTo({url: '../test/test'});
          //  break;
          // case 7:
          //  my.redirectTo({url: '../vaccine/vaccine'});
          //  break;
        }
    }
  },
})
  }
})