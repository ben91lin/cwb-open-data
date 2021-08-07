/**
 * Object check
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
  * Module dependencies.
  * @private
  */
var is = require('./is')

/**
  * @public
  */
var objectHas = {}

/**
  * Module exports.
  * @public
  */
module.exports = objectHas

/**
  * 
  * @param {Object} obj 
  * @returns Boolean
  */
objectHas.plainObject = function (obj) {
    return Object.values(obj).map((v) => is.plainObject(v)).includes(true)
}

/**
  * 
  * @param {Object} obj 
  * @returns Boolean
  */
objectHas.array = function (obj) {
    return Object.values(obj).map((v) => Array.isArray(v)).includes(true)
}

/**
 * 
 * @param {Object} obj 
 * @returns Boolean
 */
objectHas.oneArray = function(obj) {
    return Object.values(obj).map((v) => Array.isArray(v)).reduce((x, y) => x + y) == 1
}