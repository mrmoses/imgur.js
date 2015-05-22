import endpoint from '../endpoint';
import utils from '../utils';

export default endpoint({
    path: 'topics',
    apiUrl: [utils.API_URL, utils.API_VERSION].join('/'),
    get(topicId, sort='viral', page=0) {
        const requestPath = [this.path, topicId, sort, page].join('/');
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');
        return this.imgurAPICall(options);
    }
});
