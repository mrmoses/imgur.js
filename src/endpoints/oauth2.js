import endpoint from '../endpoint';
import utils from '../utils';

export default endpoint({
    path: 'oauth2',
    apiUrl: utils.API_URL,
    getAuthUrl(responseType) {
        const resType = responseType || 'code';
        const queryString = '?' + [
            `response_type=${resType}`,
            `client_id=${utils.CLIENT_ID}`
        ].join('&');

        const path = `${this.path}/authorize${queryString}`;
        return `${this.apiUrl}/${path}`;
    },
    get(responseType) {
        const resType = responseType || 'token';
        const queryString = '?' + [
            `response_type=${resType}`,
            `client_id=${utils.CLIENT_ID}`
        ].join('&');

        const path = `${this.path}/authorize${queryString}`;
        const options = utils.buildOptions(this.apiUrl, path, 'get');

        return this.imgurAPICall(options);
    },
    exchange(responseType, code, clientSecret) {
        const resType = responseType || 'code';
        const grantType = resType === 'code' ? 'authorization_code' : resType;
        
        const postBody = {
            'client_id': utils.CLIENT_ID,
            'client_secret': clientSecret,
            'grant_type': grantType
        };
        postBody[resType] = code;

        const path = `${this.path}/token`;
        const options = utils.buildOptions(this.apiUrl, path, 'post', postBody);

        return this.imgurAPICall(options);
    },
    refresh(refreshToken, clientSecret) {
        const queryString = '?' + [
            `refresh_token=${refreshToken}`,
            `client_id=${utils.CLIENT_ID}`,
            `client_secret=${clientSecret}`,
            'grant_type=refresh_token'
        ].join('&');

        const path = `${this.path}/token${queryString}`;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    }
});
