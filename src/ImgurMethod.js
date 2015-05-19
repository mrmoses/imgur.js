import utils from './utils.js';
import request from 'superagent';
import _ from 'lodash';

var imgurMethod = function(options) {
    _.forEach(['cb', 'method', 'apiUrl', 'path'], function(option) {
        if(!options[option]) {
            throw new Error(option + ' must be specified');
        }
    });
    request[options.method]([options.apiUrl, options.path].join('/'))
        .set('Authorization', 'Client-ID ' + utils.CLIENT_ID)
        .end(options.cb);
};

export default imgurMethod;
