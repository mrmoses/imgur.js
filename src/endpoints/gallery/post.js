import endpoint from '../../endpoint';
import utils from '../../utils';
import _ from 'lodash';

const postOptions = {
    path: 'gallery',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`
};

export default endpoint(_.extend({}, postOptions, {
    get(hash) {
        const path = `${this.path}/${hash}`;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    },
    report(hash, reason) {
        const path = `${this.path}/${hash}/report`;
        const options = utils.buildOptions(this.apiUrl, path, 'post', {reason: reason});

        return this.imgurAPICall(options);
    },
    comments: endpoint(_.extend({}, postOptions, {
        get(hash, sort='best') {
            const path = `${this.path}/${hash}/comments/${sort}`;
            const options = utils.buildOptions(this.apiUrl, path, 'get');

            return this.imgurAPICall(options);
        }
    }))
}));
