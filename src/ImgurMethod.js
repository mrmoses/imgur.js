import utils from './utils.js';
import request from 'superagent';

let imgurMethod = function(options) {
    ['cb', 'method', 'apiUrl', 'path'].forEach(option => {

        if(!options[option]) {
            throw new Error(option + ' must be specified');
        }
    });
    request[options.method]([options.apiUrl, options.path].join('/'))
        .set('Authorization', 'Client-ID ' + utils.CLIENT_ID)
        .end(options.cb);
};

export default imgurMethod;
