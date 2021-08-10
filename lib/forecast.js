/**
 * Transform Forecast Data
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */
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
     * @param {Array} metas 
     * @param {Array} records 
     */
    constructor(metas, records) {
        this.metas = metas
        this.records = records
    }

    default() {
        return this.records
    }

    flatten() {
        return this._flatten(this.records)
    }

    /**
     * A recursive flatten
     * @param {ObjectOfArray} records 
     * @returns [{}, {}, {}, ...]
     */
    _flatten(records) {
        records = records.flatMap(transform.flatOneArrayObject)
        if (objectHas.oneArray(records[0])) {
            return this._flatten(records)
        } else {
            return records.map(transform.flatNestedObject)
        }
    }

    simplify() {
        const records = this._flatten(this.records)
        var outputs = []

        for (let r of records) {
            var i = outputs.map((obj) => [obj.startTime, obj.geocode])
                .findIndex(([x, y]) => x === r.startTime && y === r.geocode)

            if (i > -1) {
                if (!outputs[i][r.elementName]) {
                    outputs[i][r.elementName] = [r.value, r.measures]
                } else {
                    outputs[i][r.elementName] = [outputs[i][r.elementName], [r.value, r.measures]]
                }
            } else {
                let deepcopy = Object.assign({}, r);
                deepcopy[deepcopy.elementName] = [deepcopy.value, deepcopy.measures]
                for (let k of ['elementName', 'value', 'measures']) {
                    delete deepcopy[k]
                }

                outputs.push(deepcopy)
            }
        }

        return outputs
    }

    customize(cb) {
        return cb(this.records)
    }

    metas() {
        return this.metas
    }
}