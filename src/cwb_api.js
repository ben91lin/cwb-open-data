const request = require('request')

class Cwb {
    BASEURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/'

    constructor() {
        this.id = ''
        this.fields = [{}]
        this.records = {}
    }

    get(url) {
        return new Promise(
            function (resolve) {
                request(
                    url,
                    function(err, res) {
                        if (err) resolve(console.log(err))

                        if (res.statusCode === 200) {
                            const body = JSON.parse(res.body)

                            if (body.success === "true") {
                                this.id = body.result.resource_id
                                this.fields = body.result.fields
                                this.records = body.records
                            }
                            resolve(this)
                        }
                    }.bind(this)
                )
            }.bind(this)
        )
    }

}

class Forecast extends Cwb {

    constructor(auth, format) {
        this.auth = auth
        this.format = format
        this.forecasts = []
    }

    gets(ids, cb) {
        const cb = cb | this.defaultCb
        return new Promise(
            async function(resolve) {
                const urls = this.concatUrls(ids)

                for (let url of urls) {
                    await this.get(url)
                    this.forecasts.concat( cb(this.records) )
                }
                resolve(this)
            }.bind(this)
        )
    }

    concatUrls(ids) {
        urls = []
        for (let id of ids) {
            urls.push(concatUrl(id))
        }
        return urls
    }

    concatUrl(id) {
        return this.BASEURL + id + this.auth + this.format
    }

    flatten(data) {
        return data.map
    }

    interpolatePoP(data) {
        return data.flatMap(
            function(d) {
                if (['PoP6h', 'PoP12h'].includes(d.weatherElement.elementName)) {
                    return 
                } else {
                    return d
                }
            }
        )
    }

    
}

module.exports = {
    Cwb, Forecast
}