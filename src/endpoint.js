import imgurAPICall from '../imgurAPICall';
import utils from './utils.js';
import _ from 'lodash';

let endpoint = options => {
    options.imgurAPICall = _.bind(imgurAPICall, options);
    options.apiUrl = options.apiUrl || [utils.API_URL, utils.API_VERSION].join('/');
    return options;
};

export default endpoint;
