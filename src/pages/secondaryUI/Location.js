
Page({
    data:{
        latitude: 23.099994,
        longitude: 113.324520,
    },
    onLoad:function(options){
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
                    longitude:lon,
                })
            }
          })
        wx.setNavigationBarTitle({
            title: '位置服务'
        })
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
        console.log('onReady');
        this.mapCtx = wx.createMapContext('myMap')
    },
    onShow:function(){
        // 生命周期函数--监听页面显示
        
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