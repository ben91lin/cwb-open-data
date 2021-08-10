# taiwan-forecast-map-data

Extract, transform and load forecast data from https://opendata.cwb.gov.tw/

API documentation - https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/

ATTENTION!! The data F-C0032-001 doesn't have geocode. If you want to find geocode. Please check ./lib/json/geocode.json

# Example

    const cwb = require('cwb-open-data')

    (
        async function() {
            const forecast = await cwb.forecast(ids = ['F-C0032-001'], auth = '')
            // output
            forecast.default()
            forecast.flatten()
        }
    )()

# Output

## default

## flatten

    [
        ...,
        {
            startTime: '2021-08-11 06:00:00',
            endTime: '2021-08-11 18:00:00',
            elementName: 'Wx',
            locationName: '臺北市',
            parameterName: '多雲午後短暫雷陣雨',
            parameterValue: '22'
        },
        ...
    ]

## customize