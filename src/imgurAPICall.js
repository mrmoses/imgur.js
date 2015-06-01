import utils from './utils.js';
import request from 'superagent-bluebird-promise';

let imgurAPICall = function(options) {
    ['method', 'apiUrl', 'path'].forEach(option => {
        if(!options[option]) {
            throw new Error(option + ' must be specified');
        }
    });
    let authToken = 'Client-ID ' + utils.CLIENT_ID;
    let body = options.body || {};
    if(utils.BEARER) {
        authToken = `Bearer ${utils.BEARER}`;
    }
    return request[options.method]([options.apiUrl, options.path].join('/'))
        .send(body)
        .set('Authorization', authToken)
        .promise();
};

export default imgurAPICall;
