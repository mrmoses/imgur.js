import ImgurEndpoint from './ImgurEndpoint';
import ImgurMethod from './ImgurMethod';
import imageEndpoint from './endpoints/image';
import utils from './utils.js';
import _ from 'lodash';


let Imgur = function(clientKey) {
    let endpoints = {
        image : imageEndpoint
    };

    utils.CLIENT_ID = clientKey;

    var imgur = {
        ImgurEndpoint : ImgurEndpoint,
        ImgurMethod : ImgurMethod
    };

    imgur.CLIENT_ID = clientKey;

    _.forEach(endpoints, function(value, key) {
        imgur[key] = value;
    });

    return imgur;
};

export default Imgur;
