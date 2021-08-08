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

describe('is.forecastId() test', function() {
    it('should return true if str is F-D0047-077', function() {
        is.forecastId('F-D0047-077').should.equal(true)
    })

    it('should return false if str is O-A0001-001', function() {
        is.forecastId('O-A0001-001').should.equal(false)
    })

    it('should return false if str is F-D0047-0778', function() {
        is.forecastId('F-D0047-0778').should.equal(false)
    })

    it('should return false if str is F-Dv047-077', function() {
        is.forecastId('F-Dv047-077').should.equal(false)
    })
})

describe('is.observationId() test', function() {
    it('should return true if str is O-A0001-001', function() {
        is.observationId('O-A0001-001').should.equal(true)
    })

    it('should return false if str is F-D0047-077', function() {
        is.observationId('F-D0047-077').should.equal(false)
    })
})

describe('is.earthquakeId() test', function() {
    it('should return true if str is E-A0014-001', function() {
        is.earthquakeId('E-A0014-001').should.equal(true)
    })

    it('should return false if str is F-D0047-077', function() {
        is.earthquakeId('F-D0047-077').should.equal(false)
    })
})

describe('is.climateId() test', function() {
    it('should return true if str is C-B0074-001', function() {
        is.climateId('C-B0074-001').should.equal(true)
    })

    it('should return false if str is O-A0001-001', function() {
        is.climateId('O-A0001-001').should.equal(false)
    })
})

describe('is.weatherId() test', function() {
    it('should return true if str is W-C0033-001', function() {
        is.weatherId('W-C0033-001').should.equal(true)
    })

    it('should return false if str is O-A0001-001', function() {
        is.weatherId('O-A0001-001').should.equal(false)
    })
})

describe('is.astronomicalId() test', function() {
    it('should return true if str is A-B0062-001', function() {
        is.astronomicalId('A-B0062-001').should.equal(true)
    })

    it('should return false if str is O-A0001-001', function() {
        is.astronomicalId('O-A0001-001').should.equal(false)
    })
})