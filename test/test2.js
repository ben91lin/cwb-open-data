var datas = [
    {
        "locationName": "新竹市",
        "weatherElement": [
            {
                "elementName": "Wx",
                "time": [
                    {
                        "startTime": "2021-08-06 12:00:00",
                        "endTime": "2021-08-06 18:00:00",
                        "parameter": {
                            "parameterName": "陰時多雲陣雨或雷雨",
                            "parameterValue": "17"
                        }
                    },
                    {
                        "startTime": "2021-08-06 18:00:00",
                        "endTime": "2021-08-07 06:00:00",
                        "parameter": {
                            "parameterName": "多雲時陰陣雨或雷雨",
                            "parameterValue": "16"
                        }
                    },
                    {
                        "startTime": "2021-08-07 06:00:00",
                        "endTime": "2021-08-07 18:00:00",
                        "parameter": {
                            "parameterName": "多雲時陰陣雨或雷雨",
                            "parameterValue": "16"
                        }
                    }
                ]
            },
            {
                "elementName": "PoP",
                "time": [
                    {
                        "startTime": "2021-08-06 12:00:00",
                        "endTime": "2021-08-06 18:00:00",
                        "parameter": {
                            "parameterName": "70",
                            "parameterUnit": "百分比"
                        }
                    },
                    {
                        "startTime": "2021-08-06 18:00:00",
                        "endTime": "2021-08-07 06:00:00",
                        "parameter": {
                            "parameterName": "70",
                            "parameterUnit": "百分比"
                        }
                    },
                    {
                        "startTime": "2021-08-07 06:00:00",
                        "endTime": "2021-08-07 18:00:00",
                        "parameter": {
                            "parameterName": "90",
                            "parameterUnit": "百分比"
                        }
                    }
                ]
            },
            {
                "elementName": "MinT",
                "time": [
                    {
                        "startTime": "2021-08-06 12:00:00",
                        "endTime": "2021-08-06 18:00:00",
                        "parameter": {
                            "parameterName": "27",
                            "parameterUnit": "C"
                        }
                    },
                    {
                        "startTime": "2021-08-06 18:00:00",
                        "endTime": "2021-08-07 06:00:00",
                        "parameter": {
                            "parameterName": "25",
                            "parameterUnit": "C"
                        }
                    },
                    {
                        "startTime": "2021-08-07 06:00:00",
                        "endTime": "2021-08-07 18:00:00",
                        "parameter": {
                            "parameterName": "25",
                            "parameterUnit": "C"
                        }
                    }
                ]
            },
            {
                "elementName": "CI",
                "time": [
                    {
                        "startTime": "2021-08-06 12:00:00",
                        "endTime": "2021-08-06 18:00:00",
                        "parameter": {
                            "parameterName": "舒適"
                        }
                    },
                    {
                        "startTime": "2021-08-06 18:00:00",
                        "endTime": "2021-08-07 06:00:00",
                        "parameter": {
                            "parameterName": "舒適"
                        }
                    },
                    {
                        "startTime": "2021-08-07 06:00:00",
                        "endTime": "2021-08-07 18:00:00",
                        "parameter": {
                            "parameterName": "舒適"
                        }
                    }
                ]
            },
            {
                "elementName": "MaxT",
                "time": [
                    {
                        "startTime": "2021-08-06 12:00:00",
                        "endTime": "2021-08-06 18:00:00",
                        "parameter": {
                            "parameterName": "29",
                            "parameterUnit": "C"
                        }
                    },
                    {
                        "startTime": "2021-08-06 18:00:00",
                        "endTime": "2021-08-07 06:00:00",
                        "parameter": {
                            "parameterName": "27",
                            "parameterUnit": "C"
                        }
                    },
                    {
                        "startTime": "2021-08-07 06:00:00",
                        "endTime": "2021-08-07 18:00:00",
                        "parameter": {
                            "parameterName": "28",
                            "parameterUnit": "C"
                        }
                    }
                ]
            }
        ]
    }
]

/**
 * 
 * @param {Object} datas 
 * @returns [{}, {}...]
 */
function flatObjecthasOneArray(obj) {
    if (!Object.values(obj).map((x) => isObject(x)).includes(true)) {
        obj = flatNestedObject(obj)
    }
    if (!Object.values(obj).map((x) => Array.isArray(x)).includes(true)) {
        return obj
    }
    const [arr, kvs] = filterArray(obj)
    var outputs = []
    
    // console.log(arr)
    for (let x of arr) {
        
        for (let [k, v] of kvs) {
            x[k] = v
        }
        outputs.push(x)
    }
    // console.log(outputs)
    return flatObjecthasOneArray(obj)
}


/**
 * 
 * @param {Object} obj 
 * @returns [Arr, kvs]
 */
function filterArray(obj) {
    return [
        Object.entries(obj).filter((x) => Array.isArray(x[1]))[0][1],
        Object.entries(obj).filter((x) => !Array.isArray(x[1]))
    ]
}

function isObject(v) {
    return v != null && typeof(v) === 'object' && Array.isArray(v) === false
}

/**
 * The recursive function to flat the nested object
 * @param {Object} obj 
 * @returns Object
 */
function flatNestedObject(obj) {
    if (!Object.values(obj).map((x) => isObject(x)).includes(true)) {
        return obj
    }
    var temp = {}
    for (let [k1, v1] of Object.entries(obj).sort((x, y) => isObject(x[1]) - isObject(y[1]))) {
        if (isObject(v1)) {
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
    return flatObject(temp)
}

// console.log(Object.entries(test).sort((x, y) => typeof(y[1]) - typeof(x[1])))

// console.log(flatObject(test))
// console.log(filterArray(datas[0]))
console.log(datas.map(flatObjecthasOneArray).flat().map(flatObjecthasOneArray).flat().map(flatObjecthasOneArray))