import utils from './utils.js';
import request from 'superagent';

const imgurMethod = function(options) {
    if(!options.cb) { throw new Error('cb must be specified');}
    request
        .get([utils.API_URL, options.path].join('/'))
        .set('Authorization', 'Client-ID ' + utils.CLIENT_ID)
        .end(options.cb);
};

export default imgurMethod;
