const objectFilter = require('../lib/etl/obj-filter')

describe('objectFilter.array()', function() {
    it('should return empty array if object values doesn\'t have array', function() {
        JSON.stringify(objectFilter.array({})).should.equal(JSON.stringify([]))
    })

    it('should return array of array if object values have array', function() {
        JSON.stringify(objectFilter.array({a: [1, 2], b: ['a', 'b', 'c']})).should.equal(JSON.stringify([[1, 2], ['a', 'b', 'c']]))
    })
})

describe('objectFilter.entriesWithoutArray()', function() {
    it('should return key and value pair without the values is array', function() {
        JSON.stringify(objectFilter.entriesWithoutArray({
            a: [1, 2],
            b: ['a', 'b', 'c'],
            c: 123,
            d: 'abc',
            e: {
                f: 123
            }
        })).should.equal(JSON.stringify([['c', 123], ['d', 'abc'], ['e', {f:123}]]))
    })
})