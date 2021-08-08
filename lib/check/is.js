/**
 * Type check & string check
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * @public
 */
var is = {}

/**
 * Module exports.
 * @public
 */
module.exports = is

/**
 * 
 * @param {any} value 
 * @returns Boolean
 */
is.object = function(value) {
    return value !== null && typeof(value) === 'object'
}

/**
 * 
 * @param {any} value 
 * @returns Boolean
 */
is.plainObject = function(value) {
    return this.object(value) && !Array.isArray(value) 
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
is.forecastId = function(str) {
    return str.match(/^F-[ACD]00\d{2}-0\d{2}$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
is.observationId = function(str) {
    return str.match(/^O-[AB]00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
is.earthquakeId = function(str) {
    return str.match(/^E-A00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
is.climateId = function(str) {
    return str.match(/^C-B00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
is.weatherId = function(str) {
    return str.match(/^W-C00\d{2}-00\d$/g) !== null
}

/**
 * 
 * @param {string} str 
 * @returns Boolean
 */
is.astronomicalId = function(str) {
    return str.match(/^A-B00\d{2}-00\d$/g) !== null
}