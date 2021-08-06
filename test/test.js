const Cwb = require('..').Cwb;

(
    async function() {
        const cwb = new Cwb()
        await cwb.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/C-B0025-001?Authorization=CWB-C6E1078B-4311-4044-BDC8-EBE6EC553F7B')
        console.log(cwb)
    }
)()