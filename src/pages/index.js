import Service from '../serviceModule/NetworkService'
Page({
    data: {
        dayInfoArray: [
            // {
            //     "cur": 60.27,
            //     "days": 21,
            //     "name": "摩天营救",
            //     "sum": 66156.24
            // }
        ],


        dataList: [
            { id: 1, name: 'title1' },
            { id: 2, name: 'title2' },
            { id: 3, name: 'title3' },
            { id: 4, name: 'title431232133333333333aaa2zsssas' },
            { id: 5, name: 'title5' },
          ],
    },
    onLoad(){
        console.log('onLoad');
        Service.getDayInfoArray();
        Service.getWeekendInfoArray();
        Service.getWeekInfoArray();
    },
    onDailyClick:function(){
        console.log("onDailyClick");
        let dailyInfo = Service.getDayInfo();
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
  })