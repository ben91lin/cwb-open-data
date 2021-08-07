/**
 * Type check
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * @public
 * @param {any} value
 * @returns boolean
 */
export default function isPlainObject(value) {
    return value && typeof(value) === 'object' && !Array.isArray(value)
}