export default {
    API_URL: 'https://api.imgur.com',
    API_VERSION: '3',
    CLIENT_ID: '',
    buildOptions: (apiUrl, path, method, body) => {
        const requestOptions = (body) ?
            { apiUrl, path, method, body } :
            { apiUrl, path, method };
    
        return requestOptions;
    },
    bearer: ''
};

