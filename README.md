# cwb-open-data

Extract, transform and load forecast data from https://opendata.cwb.gov.tw/

API documentation - https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/

TODO List(2021-08-13):

* Test transform.js
* Add Other method for Observation, Climate ... API.
* The forecast pop12h, pop6h are not match time interval(3hr, 6hr), maybe add interplot method by option.

ATTENTION!! The data F-C0032-001 doesn't have geocode. If you want to find geocode. Please check ./lib/json/geocode.json

# Example

```javascript
    const cwb = require('cwb-open-data')
    
    (
        async function() {
            const forecast = await cwb.forecast(ids = ['F-C0032-001'], auth = '')
            // output method
            forecast.default()
            // customize output by callback
            forecast.customize(cb)
            forecast.flatten()
            forecast.simplify()
        }
    )()
```

# Output

## default

```javascript
    [
        {
            datasetDescription: '臺灣各縣市鄉鎮未來1週逐12小時天氣預報',
            locationsName: '台灣',
            dataid: 'D0047-091',
            location: [
                ...,
                {
                    locationName: '新竹縣',
                    geocode: '10004000',
                    lat: '24.841245',
                    lon: '120.995698',
                    weatherElement: [
                        ...,
                        {
                        "elementName": "PoP12h",
                        "description": "12小時降雨機率",
                        "time": [
                            ...,
                            {
                                "startTime": "2021-08-12 18:00:00",
                                "endTime": "2021-08-13 06:00:00",
                                "elementValue": [
                                    {
                                        "value": "20",
                                        "measures": "百分比"
                                    }
                                ]
                            },
                            ...,
                            ]
                        },
                        ...
                    ]
                },
                ...
            ]
        }
    ]
```

## flatten

```javascript
    [
        ...,
        {
            value: '10',
            measures: '百分比',
            startTime: '2021-08-11 00:00:00',
            endTime: '2021-08-11 06:00:00',
            elementName: 'PoP12h',
            description: '12小時降雨機率',
            locationName: '新竹縣',
            geocode: '10004000',
            lat: '24.841245',
            lon: '120.995698',
            datasetDescription: '臺灣各縣市鄉鎮未來1週逐12小時天氣預報',
            locationsName: '台灣',
            dataid: 'D0047-091'
        },
        ...
    ]
```

## simplify

This method will aggregate the data by geocode and startTime. Ther array[0] is value, array[1] is measure. Please attention the data F-C0032-001 doen't have geocode, will bug there.

```javascript
    [
        ...,
        {
            startTime: '2021-08-11 00:00:00',
            endTime: '2021-08-11 06:00:00',
            locationName: '新竹縣',
            geocode: '10004000',
            lat: '24.841245',
            lon: '120.995698',
            datasetDescription: '臺灣各縣市鄉鎮未來1週逐12小時天氣預報',
            locationsName: '台灣',
            dataid: 'D0047-091',
            PoP12h: [ '10', '百分比' ],
            T: [ '27', '攝氏度' ],
            RH: [ '92', '百分比' ],
            MinCI: [ [ '26', 'NA' ], [ '舒適', '自定義 CI 文字' ] ],
            WS: [ [ '1', '公尺/秒' ], [ '<= 1', '蒲福風級' ] ],
            MaxAT: [ '32', '攝氏度' ],
            Wx: [ [ '多雲', '自定義 Wx 文字' ], [ '04', '自定義 Wx 單位' ] ],
            MaxCI: [ [ '26', 'NA ' ], [ '舒適', '自定義 CI 文字' ] ],
            MinT: [ '26', '攝氏度' ],
            WeatherDescription: [ '多雲。降雨機率 10%。溫度攝氏26至27度。舒適。西南風 風速<= 1級(每秒1公尺)。相對濕度92%。', 'NA' ],
            MinAT: [ '31', '攝氏度' ],
            MaxT: [ '27', '攝氏度' ],
            WD: [ '西南風', '8方位' ],
            Td: [ '25', '攝氏度' ]
        },
        ...
    ]
```