import endpoint from '../endpoint';
import utils from '../utils';
import _ from 'lodash';

const postOptions = {
    path: 'account',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`
};

export default endpoint(_.extend({}, postOptions, {
    get(username) {
        const options = utils.buildOptions(this.apiUrl, `${this.path}/${username}`, 'get');

        return this.imgurAPICall(options);
    },
    submissions: endpoint(_.extend({}, postOptions, {
        get(username, page=0) {
            const path = `${this.path}/${username}/submissions/${page}`;
            const options = utils.buildOptions(this.apiUrl, path, 'get');

            return this.imgurAPICall(options);
        }
    }))
}));

