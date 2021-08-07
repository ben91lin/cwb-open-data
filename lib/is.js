/**
 * Type check
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
    return value && typeof(value) === 'object'
}

/**
 * 
 * @param {any} value 
 * @returns Boolean
 */
is.plainObject = function(value) {
    return value && typeof(value) === 'object' && !Array.isArray(value) 
}