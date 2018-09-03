var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
    data:{
        latitude: 23.099994,
        longitude: 113.324520,
    },
    onLoad:function(){
        // 生命周期函数--监听页面加载
        console.log('onLoad');
        wx.getLocation({
            type: 'wgs84',
            success:(res) => {
                let lat = res.latitude;
                let lon = res.longitude;
                console.log(`lat:${lat},lon:${lon}`);
                this.setData({
                    latitude:lat,
                    longitude:lon
                })
            }
        });
        wx.setNavigationBarTitle({
            title: '位置服务'
        })
        qqmapsdk = new QQMapWX({
            key: 'IJMBZ-WFHHO-HVIWB-SRLOH-AWVXK-C2BLS'
        });
       
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
        console.log('onReady');
        // this.mapCtx = wx.createMapContext('myMap')
    },
    onShow:function(){
        // 生命周期函数--监听页面显示
        // qqmapsdk.search({
        //     keyword: '酒店',
        //     success: function (res) {
        //         console.log(res);
        //     },
        //     fail: function (res) {
        //         console.log(res);
        //     },
        //     complete: function (res) {
        //         console.log(res);
        //     }
        // })
        
    },
    onHide:function(){
        // 生命周期函数--监听页面隐藏
       
    },
    onUnload:function(){
        // 生命周期函数--监听页面卸载
       
    },
    onPullDownRefresh: function() {
        // 页面相关事件处理函数--监听用户下拉动作
       
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
       
    },
    onShareAppMessage: function() {
        // 用户点击右上角分享
        return {
          title: '位置服务', // 分享标题
        }
    }
})