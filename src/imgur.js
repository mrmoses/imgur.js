import imgurAPICall from './imgurAPICall';
import imageEndpoint from './endpoints/image';
import oauth2Endpoint from './endpoints/oauth2';
import topicsEndpoint from './endpoints/topics';
import galleryEndpoint from './endpoints/gallery';
import commentEndpoint from './endpoints/comment';
import utils from './utils.js';

export default function(clientKey, bearerKey) {
    let setUtil = function(key, value) {
        utils[key] = value;
    };

    let getUtil = function(key) {
        return utils[key];
    };

    if (!clientKey) {
        throw new Error('Client Key required to initialize imgur client');
    }

    setUtil('CLIENT_ID', clientKey);

    if(bearerKey) {
        setUtil('bearer', bearerKey);
    }

    return {
        imgurAPICall,
        CLIENT_ID: clientKey,
        image: imageEndpoint,
        oauth2: oauth2Endpoint,
        topics: topicsEndpoint,
        gallery: galleryEndpoint,
        comment: commentEndpoint,
        setUtil,
        getUtil
    };
}

