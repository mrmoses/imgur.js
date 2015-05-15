import utils from './utils.js';
import request from 'superagent';

const imgurMethod = function(options) {
    request
        .get(utils.API_URL + options.path)
        .end(options.cb);
};
export default imgurMethod;
