/**
 * Transform Forecast Data
 * Copyright(c) 2021 ABen
 * MIT Licensed
 */

modules.export = class Forecast {

    constructor(records) {
        this.meta = {}
        for (let [k, v] of Object.entries(records)) {
            if (Arrayof(v)) {
                this.records = records
                break
            }
            this.meta[k] = v
        }
    }

    transform(cb) {
        const cb = cb | this.default
        this.records.map(cb)
    }

    default(d) {
        return d
    }

    flatten(d) {
        var datas = []
        for (let [k, v] of Object.entries(d)) {
            if (Arrayof(v)) {

            }
        }
    }

}