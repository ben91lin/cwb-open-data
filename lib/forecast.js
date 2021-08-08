/**
 * Transform Forecast Data
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

/**
 * Module dependencies.
 * @private
 */
const is = require('./check/is')
const get = require('./etl/get')
const filter = require('./etl/obj-filter')
const transform = require('./etl/transform')

/**
 * Module exports.
 * @public
 */
module.exports = class Forecast {

    /**
     * 
     * @param {Array} metas 
     * @param {Array} records 
     */
    constructor(metas, records) {
        this.metas = metas
        this.records = records
    }

    customize(cb) {
        return cb(this.records)
    }

    default() {
        return this.records
    }

    flatten() {
        return this.records
    }

    metas() {
        return this.metas
    }
}