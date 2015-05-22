import utils from './utils.js';
import request from 'superagent-bluebird-promise';

let imgurMethod = function(options) {
    ['method', 'apiUrl', 'path'].forEach(option => {

        if(!options[option]) {
            throw new Error(option + ' must be specified');
        }
    });
    return request[options.method]([options.apiUrl, options.path].join('/'))
        .set('Authorization', 'Client-ID ' + utils.CLIENT_ID)
        .promise();
};

export default imgurMethod;
