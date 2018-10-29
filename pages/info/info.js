Page({
    data:{
        info:[],
        token:"",
        loginId:"",
        array:[],
        arr:[],
        state:true,
        vaccineName:"",
        vaccineId:[],
        arrstate:[],
        name:""
    },
    onLoad(query){
        let that=this
        let array=that.data.array
        let arr= that.data.arr
        that.data.vaccineId=query.vaccineId
        arr.push(query.vaccineId)//保存id
        that.data.vaccineName=query.vaccineName
        array.push(that.data.vaccineName)
    my.getStorage({
        key: 'session',
         success: function(res) {
        that.data.token=res.data.token,
       that.data.loginId=res.data.loginId
      }
    })
    my.httpRequest({
      url: "http://whjtys.premier-tech.cn/whjtys/vaccine/findAllVaccineInfo?token="+that.data.token+"&loginId="+that.data.loginId, // 目标服务器 url
      success: (res) => { 
          let arrstate= that.data.arrstate
          let n=that.data.vaccineId
          let arr2=res.data.list
           let arr1=n.split(",")
           for(let i=0;i<arr2.length;i++){
               arr2[i].checked=false
               arrstate.push(arr2[i])
          for(let j=0;j<arr1.length;j++){
            if(arr1[j]==arr2[i].id){
                  arr2[i].checked=true
                }
            }
        }
          that.setData({
              info:arrstate,
            })
       }
    })
},
radioChange: function(e) {
  let that=this
  let s=[]
  let m=[]
  let  array=that.data.array
  let arrstate= that.data.arrstate
  let arr= this.data.arr
        
//    for(let i=0;i<arrstate.length;i++){
            // if(arrstate[i].id==e.target.dataset.id){
            //       arrstate[i].checked=false
            //  }
            // if(e.target.dataset.checked){
        if(e.target.dataset.checked){
                // arrstate[i].checked=true
             e.target.dataset.checked=false
             let eId=e.target.dataset.id
             let eName=e.target.dataset.vaccineName
             console.log()
            //  arr.remove(eId)
            //  array.push(eName)
            //  console.log(arr)
            //  console.log(array)
        }else{
             e.target.dataset.checked=true
             that.setData({
                 info:arrstate
             })
             let eId=e.target.dataset.id 
             let eName=e.target.dataset.vaccineName
             arr.push(eId.toString())
             array.push(eName)
             for(var i = 0;i<arrstate.length;i++){
                 if(arrstate[i].checked==true){
                       console.log(arrstate[i].id) 
                 }
                 for(var j = 0;j<arr.length;j++){
                        if(arrstate[i].id==arr[j]){
                           
                            // console.log(arrstate[i].id)
                        }
                 }
             }
        //     for(var i = 0;i<arr.length;i++){
        //      if(s.indexOf(arr[i]) == -1){  //判断在s数组中是否存在，不存在则push到s数组中
        //           s.push(arr[i]);
        //           that.data.arr=s
        //      }
        //      }
        //  for(var j = 0;j<array.length;j++){
        //      if(m.indexOf(array[j]) == -1){  //判断在s数组中是否存在，不存在则push到s数组中
        //      m.push(array[j]);
        //         that.data.array= m
        //   }
        //  }
             console.log(arr)
             console.log(array)
        }
            // }
            // if(arrstate[i].checked){
            //         arrstate[i].checked=false
            // }
    // }
    // if(e.target.dataset.checked){
    //     console.log(e.target.dataset.checked)
    //      for(let i=0;i<arrstate.length;i++){
    //          if(arrstate[i].id==e.target.dataset.id){
    //               arrstate[i].checked=false
    //          }
    //      }
    //  }else{
    //      for(let i=0;i<arrstate.length;i++){
    //          if(arrstate[i].id==e.target.dataset.id){
    //               arrstate[i].checked=true
    //          }
    //      } 
    // }
     that.setData({
         info:arrstate,
        })  
          console.log(arrstate)
    // arr.push(e.target.dataset.id)
    //      for(let i=0;i<arrstate.length;i++){
    //         if(arrstate[i].checked==true){
    //               array.push(arrstate[i].vaccineName)
    //               console.log(array)
    //          }
    //      } 

    // for(var j = 0;j<array.length;j++){
      
    // if(m.indexOf(array[j]) == -1){  //判断在s数组中是否存在，不存在则push到s数组中
    //     m.push(array[j]);
    //     that.data.array= m
    //  }
    // }

},
sure:function(e){
    my.redirectTo({
      url: '../vaccineinfo/vaccineinfo?array='+this.data.array+"&arr="+this.data.arr+"&vaccineId="+this.data.vaccineId, // 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用
    });
}
})