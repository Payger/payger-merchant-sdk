import * as endpointsConfig from './endpoints.js';

export default class Config {
    
    constructor() {
        this.config = {
            url: 'http://merchant-api-test.payger.com/api/v1',
            endpoints: endpointsConfig,
            oauth2: {
                apiKey: "2e5f36c374367fb1b28ba2d884e087d7fb5a6abf21e65a7d370b407b309514fd",
                apiSecret: "VgPMwTAeycSeWTdxvmWKBdzSInqnnEDN"
            }
        }
    }

    setConfig(url, oauth2) {
        config.url = url;
        config.oauth2 = oauth2;
    }
}