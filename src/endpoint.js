import imgurAPICall from '../imgurAPICall';
import utils from './utils.js';
import _ from 'lodash';

export default function(options) {
    options.imgurAPICall = _.bind(imgurAPICall, options);
    options.apiUrl = options.apiUrl || `${utils.API_URL}/${utils.API_VERSION}`;

    return options;
}

