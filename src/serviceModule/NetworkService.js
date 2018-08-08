class Service {

    dayInfo = []
    weekendInfo = []
    weekInfo = []

    
    getDayInfoArray() {
        wx.request({
            url: 'https://apicloud.mob.com/boxoffice/day/query?key=12c15698fd0b7&area=CN',
            header: {
                'content-type': 'application/json'
            },
            success:(res) => {
                console.log(res.data)
                this.dayInfo = res.data
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
                console.log(res.data)
                this.weekendInfo = res.data
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
                console.log(res.data)
                this.weekInfo = res.data
            }
        })
    }
    
}

export default Service = new Service()