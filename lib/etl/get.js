/**
 * Main Module
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const request = require('request')

/**
  * Module exports.
  * @public
  */
module.exports =  function(url) {
    return new Promise(
        function (resolve, reject) {
            request(
                url,
                function(err, res) {
                    if (err) reject(err)

                    if (res.statusCode === 200) {
                        const body = JSON.parse(res.body)

                        if (body.hasOwnProperty('success') && body.success === "true") {
                            resolve(body)
                        } else {
                            reject(new Error('The res.code is 200, but Json doesn\'t load successfully.'))
                        }
                    } else {
                        reject(new Error(`Http status code ${res.statusCode}.`))
                    }
                }.bind(this)
            )
        }.bind(this)
    )
}