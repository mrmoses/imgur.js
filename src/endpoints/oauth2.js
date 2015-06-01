import endpoint from '../endpoint';
import utils from '../utils';

export default endpoint({
    path: 'oauth2',
    apiUrl: utils.API_URL,
    get(responseType) {
        const resType = (responseType || 'token');
        const queryString = '?' + [
            `response_type=${resType}`,
            `client_id=${utils.CLIENT_ID}`
        ].join('&');

        const path = [this.path, 'authorize'].join('/') + queryString;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    },
    refresh(refreshToken, clientSecret) {
        const queryString = '?' + [
            `refresh_token=${refreshToken}`,
            `client_id=${utils.CLIENT_ID}`,
            `client_secret=${clientSecret}`,
            'grant_type=refresh_token'
        ].join('&');

        const path = [this.path, 'token'].join('/') + queryString;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },

});
