/**
 * Type check
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
  * @public
  */
var filter = {}

/**
  * Module exports.
  * @public
  */
module.exports = filter

/**
 * 
 * @param {Object} obj 
 * @returns [Array, keyValuePair]
 */
filter.arrayFromObject = function (obj) {
    return [
      Object.values(obj).filter((v) => Array.isArray(v)),
      Object.entries(obj).filter(([k , v]) => !Array.isArray(v))
    ]
}

