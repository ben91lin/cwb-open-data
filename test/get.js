const assert = require('assert')
const get = require('../lib/etl/get')
//TODO: How to test fail?

describe('get()', function() {
    it('should return object with right url', async function() {
        const obj = await get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-C6E1078B-4311-4044-BDC8-EBE6EC553F7B')

        // `${typeof(obj)}`.should.equal('object')
        JSON.stringify(Object.keys(obj)).should.equal(JSON.stringify(['success', 'result', 'records']))
        obj.success.should.equal('true')
    })

    it('should return error with wrong url', async function() {
        async function test () {
            await get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089')
        }
        assert.rejects(test, Error, 'Http status code 401.')
    })
})