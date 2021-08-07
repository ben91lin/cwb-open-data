/**
 * Transform function set
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const isPlainObject = require('./is-plain-obj')
const objectHas = require('./obj-has')
const filter = require('./filter')

/**
 * @public
 */
var transform = {}

/**
 * Module exports.
 * @public
 */
module.exports = transform

/**
 * The recursive function to flat the nested object.
 * @param {Object} obj 
 * @returns Object
 */
transform.flatNestedObject = function(obj) {
    if (!objectHas.object(obj)) return obj
    var temp = {}
    for (let [k1, v1] of Object.entries(obj).sort((x, y) => isPlainObject(x[1]) - isPlainObject(y[1]))) {
        if (isPlainObject(v1)) {
            for (let [k2, v2] of Object.entries(v1)) {
                if (!temp.hasOwnProperty(k2)) {
                    temp[k2] = v2
                } else {
                    temp[`${k1}-${k2}`] = v2
                }
            }
        } else {
            temp[k1] = v1
        }
    }
    return this.flatNestedObject(temp)
}

/**
 * A function to flat the object has one array to array of object.
 * @param {Object} obj 
 * @returns ArrayOf[{}, {}, ...]
 */
transform.flatOneArrayObject = function(obj) {
    if (!objectHas.oneArray(obj)) return obj
    const [arr, kvs] = filter.arrayFromObject(obj)
    var arrayOfObject = []
    for (let o of arr) {
        for (let [k, v] of kvs) {
            o[k] = v
        }
        arrayOfObject.push(x)
    }
    return arrayOfObject
}