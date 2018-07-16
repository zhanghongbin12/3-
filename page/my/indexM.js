Page({
    onLoad:function(){
        var dataOLD = ["demo-text-1","demo-text-2","demo-text-3","demo-text-4","demo-text-5","demo-text-6","demo-text-7","demo-text-8","demo-text-9"];
        var dataNEW =[];
        for(var i=0;i<9;i++){
            var l = dataOLD.length-1;
            var n = Math.floor(Math.random()*l);
            dataNEW.push(dataOLD[n]);
            dataOLD.splice(n,1);
           
        }

        this.setData({
            list: [{
                pageClass:[dataNEW[0],dataNEW[1],dataNEW[2]]
            },{
                pageClass:[dataNEW[3],dataNEW[4],dataNEW[5]]
            },{
                pageClass:[dataNEW[6],dataNEW[7],dataNEW[8]]
            }],
            num:Math.ceil(Math.random()*9)
        })
    },
    data:{
        list: [{
            pageClass:["","",""]
        },{
            pageClass:["","",""] 
        },{
            pageClass:["","",""]
        }]
    },
    tap: function (e) {
        if("demo-text-"+this.data.num != e.target.id){
            wx.showToast({
                title: "答案错误，请重试",
                icon: "none",
                duration: 2000
            })
        }else{
            wx.showToast({
                title: "恭喜回答正确!",
                icon: "none",
                duration: 3000,
                success:function(){
                    setTimeout(function(){
                        wx.redirectTo({url:"indexM"});
                    },3000) 
                }
            })
        }

    }

})

