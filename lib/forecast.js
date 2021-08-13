/**
 * Transform Forecast Data
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

'use strict'

/**
 * The forecast data have the following element.
 * Some element have 2 measure.
 * element: description, measure
 * PoP12h: 12小時降雨機率, 百分比
 * T: 平均溫度, 攝氏度
 * MinT: 最低溫度, 攝氏度
 * MaxT: 最高溫度, 攝氏度
 * MinAT: 最低體感溫度, 攝氏度
 * MaxAT: 最高體感溫度, 攝氏度
 * Td: 平均露點溫度, 攝氏度
 * RH: 平均相對濕度, 百分比
 * WD: 風向, 8方位
 * WS: 最大風速, (公尺/秒, 蒲福風級)
 * MinCI: 最小舒適度指數, (NA, 自定義 CI 文字)
 * Wx: 天氣現象, (自定義 Wx 文字, 自定義 Wx 單位)
 * MaxCI: 最大舒適度指數, (NA, 自定義 CI 文字)
 * UVI: 紫外線指數, (紫外線指數, 曝曬級數)
 * WeatherDescription: 天氣預報綜合描述, NA
 */

/**
 * Module dependencies.
 * @private
 */
const objectHas = require('./check/obj-has')
const transform = require('./etl/transform')

/**
 * Module exports.
 * @public
 */
module.exports = class Forecast {

    /**
     * 
     * @param {Array} meta 
     * @param {Array} records 
     */
    constructor(meta, records) {
        this.meta = meta
        this.records = records
    }

    default() {
        return this.records
    }

    customize(cb) {
        return cb(this.records)
    }

    flatten() {
        var records = this.records
        while (objectHas.oneArray(records[0])) {
            records = records.flatMap(transform.flatOneArrayObject)
        }

        return records.map(transform.flatNestedObject)
    }

    simplify() {
        const records = this.flatten(this.records)
        var outputs = []

        for (let r of records) {
            // find index if it has the same geocode and startTime.
            var i = outputs
                .map((obj) => [obj.startTime, obj.geocode])
                .findIndex(([x, y]) => x === r.startTime && y === r.geocode)

            // if can't find, push a copy object r without some properties.
            // else, add a property elementName: [value, measures] to object.
            if (i === -1) {
                let copy = Object.fromEntries(
                    Object.entries(r).filter((v) => !['elementName', 'value', 'measures', 'description'].includes(v))
                )
                copy[r.elementName] = [r.value, r.measures]
                outputs.push(copy)
            } else {
                if (!outputs[i].hasOwnProperty(r.elementName)) {
                    outputs[i][r.elementName] = [r.value, r.measures]
                } else {
                    outputs[i][r.elementName] = [outputs[i][r.elementName], [r.value, r.measures]]
                }
            }
        }

        return outputs
    }

    //TODO:
    _interplotPop(records) {

    }
}