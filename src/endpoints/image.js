import imgurEndpoint from '../ImgurEndpoint';
import utils from '../utils';

export default imgurEndpoint({
    path: 'image',
    apiUrl: [utils.API_URL, utils.API_VERSION].join('/'),
    get: function (hash, cb) {
        const options = utils.buildOptions(this.apiUrl, [this.path, hash].join('/'), 'get', cb);
        return this.imgurMethod(options);
    }
});

