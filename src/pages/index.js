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
            this._toastShow();
            return;
        }
        for(let info of dailyInfo){
            info["dayhide"] = false;
            info["weekendhide"] = true;
            info["weekhide"] = true;
        }
        console.dir(dailyInfo)
        this.setData({
            dayInfoArray: dailyInfo
        })
    },
    onWeekendClick:function(){
        console.log("onWeekendClick");
        let weekendInfo = Service.getWeekendInfo();
        if(!weekendInfo.length){
            this._toastShow();
            return;
        }
        for(let info of weekendInfo){
            info["dayhide"] = true;
            info["weekendhide"] = false;
            info["weekhide"] = true;
        }
        console.dir(weekendInfo);
        this.setData({
            dayInfoArray: weekendInfo
        })
    },
    onWeekClick:function(){
        console.log("onWeekClick");
        let weekInfo = Service.getWeekInfo();
        if(!weekInfo.length){
            this._toastShow();
            return;
        }
        for(let info of weekInfo){
            info["dayhide"] = true;
            info["weekendhide"] = true;
            info["weekhide"] = false;
        }
        console.dir(weekInfo);
        this.setData({
            dayInfoArray: weekInfo
        })
    },

    _toastShow(){
        wx.showToast({
            title: '网络被偷走了、、、',
            icon: 'none',
            duration: 500
          })
    },
    _requestData(){
        Service.getDayInfoArray();
        Service.getWeekendInfoArray();
        Service.getWeekInfoArray();
    }
  })