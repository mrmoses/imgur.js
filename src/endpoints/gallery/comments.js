import endpoint from '../../endpoint';
import utils from '../../utils';

export default endpoint({
    path: 'gallery',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(hash, sort='best') {
        const path = `${this.path}/${hash}/comments/${sort}`;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    }
});
