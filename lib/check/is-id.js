/**
 * Data id string check
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * @public
 */
var isId = {}

/**
 * Module exports.
 * @public
 */
module.exports = isId

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
isId.forecast = function(str) {
    return str.match(/^F-[ACD]00\d{2}-0\d{2}$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
isId.observation = function(str) {
    return str.match(/^O-[AB]00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
isId.earthquake = function(str) {
    return str.match(/^E-A00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
isId.climate = function(str) {
    return str.match(/^C-B00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
isId.weather = function(str) {
    return str.match(/^W-C00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
isId.astronomicalId = function(str) {
    return str.match(/^A-B00\d{2}-00\d$/g) !== null
}