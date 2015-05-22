import imgurEndpoint from '../ImgurEndpoint';
import utils from '../utils';

export default imgurEndpoint({
    path: 'image',
    apiUrl: [utils.API_URL, utils.API_VERSION].join('/'),
    get(hash) {
        const options = utils.buildOptions(this.apiUrl, [this.path, hash].join('/'), 'get');
        return this.imgurMethod(options);
    }
});

