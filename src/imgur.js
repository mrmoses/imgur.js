import ImgurEndpoint from './ImgurEndpoint';
import ImgurMethod from './ImgurMethod';
import imageEndpoint from './endpoints/image';
import oauth2Endpoint from './endpoints/oauth2';
import utils from './utils.js';
import _ from 'lodash';


let Imgur = clientKey => {
    if(!clientKey) { throw new Error('Client Key required to initialize imgur client');}
    let endpoints = {
        image : imageEndpoint,
        oauth2: oauth2Endpoint
    };

    utils.CLIENT_ID = clientKey;

    let imgur = {
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
