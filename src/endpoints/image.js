import endpoint from '../endpoint';
import utils from '../utils';

export default endpoint({
    path: 'image',
    apiUrl: [utils.API_URL, utils.API_VERSION].join('/'),
    get(hash) {
        const options = utils.buildOptions(this.apiUrl, [this.path, hash].join('/'), 'get');
        return this.imgurAPICall(options);
    }
});

