import imgurEndpoint from '../ImgurEndpoint';
import utils from '../utils';

export default imgurEndpoint({
    path: 'image',
    apiUrl: [utils.API_URL, utils.API_VERSION].join('/'),
    get: function (hash, cb) {
        return this.imgurMethod({
            path: [this.path, hash].join('/'),
            cb: cb,
            method: 'get',
            apiUrl: this.apiUrl
        });
    }
});

