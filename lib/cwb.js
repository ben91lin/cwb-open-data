/**
 * Main Module, for extract
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const is = require('./check/is')
const get = require('./etl/get')
const url = require('./etl/url')
const transform = require('./etl/transform')
const objectFilter = require('./etl/obj-filter')
const forecast = require('./forecast')

/**
 * @public
 */
var cwb = {}

/**
  * Module exports.
  * @public
  */
module.exports = cwb

/**
 * 
 * @param {str, Array(str)} ids 
 * @param {str} auth 
 * @param {str} format 
 * @returns Forecast
 */
cwb.forecast = async function(ids, auth, format = '') {
    ids = Array.isArray(ids) ? ids : Array.of(ids)
    // check ids.
    for (let id of ids) {
        if (!is.forecastId(id)) throw `Id ${id} is not forecast id.`
    }
    var meta = []
    var records = []
    // join urls.
    const urls = url.joins(ids, auth, format)
    for (let url of urls) {
        let body = await get(url)
        for (let [k, v] of objectFilter.entriesWithoutArray(body.records)) {
            body.result[k] = v
        }
        
        meta.push(body.result)
        records.push(objectFilter.array(body.records)[0])
    }
    
    return new forecast(meta, records.flat())
}