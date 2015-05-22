let utils = {
    API_URL : 'https://api.imgur.com',
    API_VERSION: '3',
    CLIENT_ID: '',
    buildOptions: function(apiUrl, path, method) {
        return { apiUrl, path, method };
    }
};

export default utils;
