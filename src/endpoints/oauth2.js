import imgurEndpoint from '../ImgurEndpoint';
import utils from '../utils';

export default imgurEndpoint({
    path: 'oauth2',
    apiUrl: utils.API_URL,
    get: function (responseType, cb) {
        let queryString = '?' + [
            'response_type=' + (responseType || 'token'),
            'client_id=' + utils.CLIENT_ID
        ].join('&');

        let options = {
            apiUrl: this.apiUrl,
            path: [this.path, 'authorize'].join('/') + queryString,
            cb: cb,
            method: 'get'
        };

        return this.imgurMethod(options);
    }
});
