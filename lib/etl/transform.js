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
const is = require('../check/is')
const objectHas = require('../check/obj-has')
const objectFilter = require('./obj-filter')

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
 * A recursive function to flat the nested object.
 * @param {Object} obj 
 * @returns Object
 */
transform.flatNestedObject = function(obj) {
    if (!objectHas.plainObject(obj)) return obj
    var temp = {}
    for (let [k1, v1] of Object.entries(obj).sort((x, y) => is.plainObject(x[1]) - is.plainObject(y[1]))) {
        if (is.plainObject(v1)) {
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
    return transform.flatNestedObject(temp)
}

/**
 * A function to flat the object has one array to array of object.
 * @param {Object} obj {a: , b: [{}, {}, ...]}
 * @returns ArrayOfObject[{a: ,}, {a: ,}, ...]
 */
transform.flatOneArrayObject = function(obj) {
    if (!objectHas.oneArray(obj)) return obj
    const arr = objectFilter.array(obj)[0]
    const kvs = objectFilter.entriesWithoutArray(obj)

    return arr.map(function(o){
        for (let [k, v] of kvs) o[k] = v
        return o
    })
}