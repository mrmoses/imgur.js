import utils from './utils.js';
import request from 'superagent-bluebird-promise';

let imgurAPICall = function(options) {
    ['method', 'apiUrl', 'path'].forEach(option => {
        if(!options[option]) {
            throw new Error(option + ' must be specified');
        }
    });
    let body = options.body || {};
    if(options.bearer) {

    }
    const authToken = 'Client-ID ' + utils.CLIENT_ID;
    return request[options.method]([options.apiUrl, options.path].join('/'))
        .send(body)
        .set('Authorization', authToken)
        .promise();
};

export default imgurAPICall;
