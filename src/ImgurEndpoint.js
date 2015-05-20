import imgurMethod from '../ImgurMethod';
import utils from './utils.js';
import _ from 'lodash';

let imgurEndpoint = function(options) {
    options.imgurMethod = _.bind(imgurMethod, options);
    options.apiUrl = options.apiUrl || [utils.API_URL, utils.API_VERSION].join('/');
    return options;
};

export default imgurEndpoint;
