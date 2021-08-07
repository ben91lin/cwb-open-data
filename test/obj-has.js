const objectHas = require('../lib/check/obj-has')

describe('objectHas.plainObject()', function() {
    it('should return true if object has object protperty', function() {
        objectHas.plainObject({
            a: {}
        }).should.equal(true)
    })

    it('should return false if object doesn\'t have object property', function() {
        objectHas.plainObject({
            a: 1
        }).should.equal(false)
    })
})

describe('objectHas.array()', function() {
    it('should return true if object has array property', function() {
        objectHas.array({
            a: []
        }).should.equal(true)
    })

    it('should return false if object doesn\'t have array property', function() {
        objectHas.array({
            a: {}
        }).should.equal(false)
    })
})

describe('objectHas.oneArray()', function() {
    it('should return true if object has one array property', function() {
        objectHas.oneArray({
            a: []
        }).should.equal(true)
    })

    it('should return false if object doesn\'t have array property', function() {
        objectHas.oneArray({
            a: {}
        }).should.equal(false)
    })

    it('should return false if object has more than one array property', function() {
        objectHas.oneArray({
            a: [],
            b: []
        }).should.equal(false)
    })
})