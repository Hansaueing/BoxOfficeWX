import Service from '../serviceModule/NetworkService'
Page({
    data: {
        dayInfoArray: [],
    },
    netType: "",
    onLoad(){

        console.log('onLoad');
        wx.onNetworkStatusChange((res)=> {
            console.log(res.networkType)
            this.netType = res.networkType;
            if(res.isConnected && !Service.getDayInfo().length){
                this._requestData();
            }
        })
        wx.getNetworkType({
            success:(result)=>{
                console.log(result.networkType);
                this.netType = result.networkType;
            }
        });
        this._requestData();
    },
    onDailyClick:function(){
        console.log("onDailyClick");
        let dailyInfo = Service.getDayInfo();
        if(!dailyInfo.length){
            this._toastShow('网络被偷走啦、、、', 800);
            return;
        }
        for(let info of dailyInfo){
            info["dayhide"] = false;
            info["weekendhide"] = true;
            info["weekhide"] = true;
        }
        // console.dir(dailyInfo)
        this.setData({
            dayInfoArray: dailyInfo
        })
    },
    onWeekendClick:function(){
        console.log("onWeekendClick");
        let weekendInfo = Service.getWeekendInfo();
        if(!weekendInfo.length){
            this._toastShow('网络被偷走啦、、、', 800);
            return;
        }
        for(let info of weekendInfo){
            info["dayhide"] = true;
            info["weekendhide"] = false;
            info["weekhide"] = true;
        }
        // console.dir(weekendInfo);
        this.setData({
            dayInfoArray: weekendInfo
        })
    },
    onWeekClick:function(){
        console.log("onWeekClick");
        let weekInfo = Service.getWeekInfo();
        if(!weekInfo.length){
            this._toastShow('网络被偷走啦、、、', 800);
            return;
        }
        for(let info of weekInfo){
            info["dayhide"] = true;
            info["weekendhide"] = true;
            info["weekhide"] = false;
        }
        // console.dir(weekInfo);
        this.setData({
            dayInfoArray: weekInfo
        })
    },

    onEmailClick:function(){
        console.log('onEmailClick');
        this._toastShow('hansaueing@163.com', 2000);
    },

    onMapClick:function(){
        console.log('onMapClick');
        wx.navigateTo({
            url: 'secondaryUI/Location'
        });
    },

    _toastShow(msg, ms){
        wx.showToast({
            title: msg,
            icon: 'none',
            duration: ms
        })
    },
    _requestData(){
        Service.getDayInfoArray({
            onSuccess:()=>{
                console.log('Request DailyInfo Success');
                this.onDailyClick();
            }
        });
        Service.getWeekendInfoArray();
        Service.getWeekInfoArray();
    },
    onShareAppMessage: function() {
        // 用户点击右上角分享
        return {
            title: '票房信息', // 分享标题
        }
    }
})