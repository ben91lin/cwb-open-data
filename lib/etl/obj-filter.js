/**
 * Object filter
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
  * @public
  */
var objectFilter = {}

/**
  * Module exports.
  * @public
  */
module.exports = objectFilter

/**
 * 
 * @param {Object} obj 
 * @returns [[], [], ...]
 */
objectFilter.array = function(obj) {
    return Object.values(obj).filter((v) => Array.isArray(v))
}

/**
 * 
 * @param {Object} obj 
 * @returns keyValuePair
 */
objectFilter.entriesWithoutArray = function(obj) {
    return Object.entries(obj).filter(([k , v]) => !Array.isArray(v))
}

