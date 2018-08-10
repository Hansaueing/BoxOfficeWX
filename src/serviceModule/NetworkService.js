class Service {

    dayInfo = []
    weekendInfo = []
    weekInfo = []

    getDayInfo(){
        return this.dayInfo;
    }

    getWeekendInfo(){
        return this.weekendInfo;
    }

    getWeekInfo(){
        return this.weekInfo;
    }
    
    getDayInfoArray(callback) {
        wx.request({
            url: 'https://apicloud.mob.com/boxoffice/day/query?key=12c15698fd0b7&area=CN',
            header: {
                'content-type': 'application/json'
            },
            success:(res) => {
                // console.dir(res.data.result)
                this.dayInfo = res.data.result
                callback.onSuccess();
            }
        })
    }

    getWeekendInfoArray() {
        wx.request({
            url: 'https://apicloud.mob.com/boxoffice/weekend/query?key=12c15698fd0b7&area=CN',
            header: {
                'content-type': 'application/json'
            },
            success:(res) => {
                // console.dir(res.data.result)
                this.weekendInfo = res.data.result
            }
        })
    }

    getWeekInfoArray() {
        wx.request({
            url: 'https://apicloud.mob.com/boxoffice/week/query?key=12c15698fd0b7&area=CN',
            header: {
                'content-type': 'application/json'
            },
            success:(res) => {
                // console.dir(res.data.result)
                this.weekInfo = res.data.result
            }
        })
    }
    
}

export default Service = new Service()