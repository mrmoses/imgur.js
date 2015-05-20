let utils = {
    API_URL : 'https://api.imgur.com',
    API_VERSION: '3',
    CLIENT_ID: '',
    buildOptions: function(apiUrl, path, method, cb) {
        return { apiUrl, path, method, cb };
    }
};

export default utils;
