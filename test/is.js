const assert = require('assert')
const should = require('should')
const is = require('../lib/is')

describe('is.object()', function() {
    it('should return true when type is Object', function(done) {
        is.object({}).should.equal(true)
        done()
    })

    it('should return true when type is Null', function(done) {
        is.object([]).should.equal(true)
        done()
    })

    it('should return false when type is null', function(done) {
        assert.strictEqual(is.object(null), false)
        done()
    })
})

describe('is.plainObject()', function() {
    it('should return true when type is Object', function(done) {
        
        is.plainObject({}).should.equal(true)
        done()
    })

    it('should return false when type is Array', function(done) {
        is.plainObject([]).should.equal(false)
        done()
    })

    it('should return false when type is null', function(done) {
        assert.strictEqual(is.plainObject(null), false)
        done()
    })
})