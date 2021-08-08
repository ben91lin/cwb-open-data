const url = require('../lib/etl/url')

describe('url.join()', function() {
    const auth = 'TEST-AUTH'

    it('shoud join url, ', function() {
        url.join('F-C0032-001', auth).should.equal('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=TEST-AUTH')
    })

    it('shoud join url Array, ', function() {
        url.joins(['F-C0032-001'], auth).should.eql(['https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=TEST-AUTH'])
    })
})