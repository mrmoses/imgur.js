import imgurEndpoint from '../ImgurEndpoint';
import utils from '../utils';

export default imgurEndpoint({
    path: 'oauth2',
    apiUrl: utils.API_URL,
    get: function (responseType, cb) {
        const resType = (responseType || 'token');
        const queryString = '?' + [
            `response_type=${resType}`,
            `client_id=${utils.CLIENT_ID}`
        ].join('&');

        const path = [this.path, 'authorize'].join('/') + queryString;
        const options = utils.buildOptions(this.apiUrl, path, 'get', cb);

        return this.imgurMethod(options);
    },
    refresh: function (refreshToken, clientSecret, cb) {
        const queryString = '?' + [
            `refresh_token=${refreshToken}`,
            `client_id=${utils.CLIENT_ID}`,
            `client_secret=${clientSecret}`,
            'grant_type=refresh_token'
        ].join('&');

        const path = [this.path, 'token'].join('/') + queryString;
        const options = utils.buildOptions(this.apiUrl, path, 'post', cb);

        return this.imgurMethod(options);
    }
});
