Page({

    onLoad:function(){
        var dataOLD = ["demo-text-01","demo-text-02","demo-text-03","demo-text-04","demo-text-05","demo-text-06","demo-text-07","demo-text-08","demo-text-09"];
        var dataIMG = ["demo-img-1", "demo-img-2", "demo-img-3", "demo-img-4", "demo-img-5", "demo-img-6", "demo-img-7", "demo-img-8", "demo-img-9"];
        var animation = wx.createAnimation({
             duration: 500,   
             timingFunction: 'linear'
        })
        this.setData({listData:[{
            list: [{
              pageClass: [{ "class": dataOLD[0], "animation": animation }, { "class": dataOLD[1], "animation": animation }, { "class": dataOLD[2], "animation": animation} ]
            },{
                pageClass: [{ "class": dataOLD[3], "animation": animation }, { "class": dataOLD[4], "animation": animation }, { "class": dataOLD[5], "animation": animation }]
            },{
                pageClass: [{ "class": dataOLD[6], "animation": animation }, { "class": dataOLD[7], "animation": animation }, { "class": dataOLD[8], "animation": animation }]
            }]
        },{
            list: [{
              pageClass: [{ "class": dataIMG[0], "animation": animation }, { "class": dataIMG[1], "animation": animation }, { "class": dataIMG[2], "animation": animation }]
            }, {
                pageClass: [{ "class": dataIMG[3], "animation": animation }, { "class": dataIMG[4], "animation": animation }, { "class": dataIMG[5], "animation": animation }]
            }, {
                pageClass: [{ "class": dataIMG[6], "animation": animation }, { "class": dataIMG[7], "animation": animation }, { "class": dataIMG[8], "animation": animation }]
            }]
        }]})
    },
    data:{},
    login: function (e) {
        var dataOLD = ["demo-text-01", "demo-text-02", "demo-text-03", "demo-text-04", "demo-text-05", "demo-text-06", "demo-text-07", "demo-text-08", "demo-text-09"];
        var dataIMG = ["demo-img-1", "demo-img-2", "demo-img-3", "demo-img-4", "demo-img-5", "demo-img-6", "demo-img-7", "demo-img-8", "demo-img-9"];
        var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'linear'
        })
        var animation2 = wx.createAnimation({
          duration: 500,
          timingFunction: 'linear',
          delay:500
        })
        var aa = {
          listData: [{
            list: [{
              pageClass: [{ "class": dataOLD[0], "animation": animation }, { "class": dataOLD[1], "animation": animation }, { "class": dataOLD[2], "animation": animation }]
            }, {
              pageClass: [{ "class": dataOLD[3], "animation": animation }, { "class": dataOLD[4], "animation": animation }, { "class": dataOLD[5], "animation": animation }]
            }, {
              pageClass: [{ "class": dataOLD[6], "animation": animation }, { "class": dataOLD[7], "animation": animation }, { "class": dataOLD[8], "animation": animation }]
            }]
          }, {
            list: [{
              pageClass: [{ "class": dataIMG[0], "animation": animation2 }, { "class": dataIMG[1], "animation": animation2 }, { "class": dataIMG[2], "animation": animation2 }]
            }, {
              pageClass: [{ "class": dataIMG[3], "animation": animation2 }, { "class": dataIMG[4], "animation": animation2 }, { "class": dataIMG[5], "animation": animation2 }]
            }, {
              pageClass: [{ "class": dataIMG[6], "animation": animation2 }, { "class": dataIMG[7], "animation": animation2 }, { "class": dataIMG[8], "animation": animation2 }]
            }]
          }]
        }
        var ev = e.target.id;
        var index = dataOLD.indexOf(ev);
        console.log(index);
        var n = Math.floor(index/3);
        var m =index%3;
        aa.listData[0].list[n].pageClass[m].animation = animation.rotateY(90).step().export();
        
        aa.listData[1].list[n].pageClass[m].animation = animation2.rotateY(0).step().export()
       
        this.setData(aa)
    }

})

