const assert = require('assert')
const should = require('should')
const is = require('../lib/check/is')

describe('is.object()', function() {
    it('should return true if type is Object', function() {
        is.object({}).should.equal(true)
    })

    it('should return true if type is Null', function() {
        is.object([]).should.equal(true)
    })

    it('should return false if type is null', function() {
        assert.strictEqual(is.object(null), false)
    })
})

describe('is.plainObject()', function() {
    it('should return true if type is Object', function() {
        is.plainObject({}).should.equal(true)
    })

    it('should return false if type is Array', function() {
        is.plainObject([]).should.equal(false)
    })

    it('should return false if type is null', function() {
        assert.strictEqual(is.plainObject(null), false)
    })
})