const fs = require('fs')
const isId = require('../lib/check/is-id');
//TODO: How to test fail?

describe('Id test', function() {
    var id = {}
    
    before(function(done) {
        fs.readFile('./lib/json/data_info.json', function(err, d) {
            if (err) throw err
            
            const dataInfo = JSON.parse(d)
            id.forecast = dataInfo
                .filter((obj) => obj.description.includes('預報'))
                .map((obj) => obj.id)
            id.observation = dataInfo
                .filter((obj) => obj.description.includes('觀測') || obj.description.includes('監測'))
                .map((obj) => obj.id)
            id.earthquake =dataInfo
                .filter((obj) => obj.description.includes('地震') || obj.description.includes('海嘯'))
                .map((obj) => obj.id)
            id.climate = dataInfo
                .filter((obj) => obj.description.includes('測站'))
                .map((obj) => obj.id)
            id.weather = dataInfo
                .filter((obj) => obj.description.includes('天氣特報'))
                .map((obj) => obj.id)
            id.astronomical = dataInfo
                .filter((obj) => obj.description.includes('時刻資料'))
                .map((obj) => obj.id)
            done()
        })
    })

    
    it(`should return true if it\'s forecast id`, function() {
        for (let i of id.forecast) {
            isId.forecast(i).should.equal(true)
        }
    })

    it(`should return true if it\'s observation id`, function() {
        for (let i of id.observation) {
            isId.observation(i).should.equal(true)
        }
    })

    it(`should return true if it\'s eathquake id`, function() {
        for (let i of id.earthquake) {
            isId.earthquake(i).should.equal(true)
        }
    })
    
    it(`should return true if it\'s climate id`, function() {
        for (let i of id.climate) {
            isId.climate(i).should.equal(true)
        }
    })

    it(`should return true if it\'s weather id`, function() {
        for (let i of id.weather) {
            isId.weather(i).should.equal(true)
        }
    })

    it(`should return true if it\'s astronomical id`, function() {
        for (let i of id.astronomical) {
            isId.astronomical(i).should.equal(true)
        }
    })
})