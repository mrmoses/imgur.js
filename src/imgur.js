import imgurAPICall from './imgurAPICall';
import imageEndpoint from './endpoints/image';
import oauth2Endpoint from './endpoints/oauth2';
import topicsEndpoint from './endpoints/topics';
import utils from './utils.js';


let Imgur = clientKey => {
    let setUtil = function(key, value) {
        utils[key] = value;
    };

    let getUtil = function(key) {
        return utils[key];
    };

    if(!clientKey) { throw new Error('Client Key required to initialize imgur client');}

    setUtil('CLIENT_ID', clientKey);

    return {
        image : imageEndpoint,
        oauth2: oauth2Endpoint,
        topics: topicsEndpoint,
        imgurAPICall : imgurAPICall,
        setUtil,
        getUtil
    };

};

export default Imgur;
