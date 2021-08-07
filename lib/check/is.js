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