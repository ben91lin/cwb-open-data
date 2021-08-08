/**
 * Main Module
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * @public
 */
var url = {}

/**
 * module exports.
 * @public
 */
module.exports = url

/**
 * cwb opendata base url
 */
url.base = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/'

/**
 * 
 * @param {str} id 
 * @param {str} auth 
 * @param {str} format 
 * @returns str
 */
url.join = function(id, auth, format = '') {
    return this.base + id + '?Authorization=' + auth + format
}

/**
 * 
 * @param {Array} ids 
 * @param {str} auth 
 * @param {str} format 
 * @returns Array
 */
url.joins = function(ids, auth, format='') {
    return ids.map((id) => url.join(id, auth, format))
}