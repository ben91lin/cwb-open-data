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
        if (!is.id.forecast(id)) throw `Id ${id} is not forecast id.`
    }
    // join urls.
    const urls = url.joins(ids, auth, format)
    var meta = []
    var records = []
    // get datas
    for (let url of urls) {
        let body = await get(url)

        meta.push(Object.assign(
            body.result,
            Object.fromEntries(
                objectFilter.entriesWithoutArray(body.records)
            )
        ))
        records.push(objectFilter.array(body.records)[0])
    }
    
    return new forecast(meta, records.flat())
}