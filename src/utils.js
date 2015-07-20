export default {
    API_URL: 'https://api.imgur.com',
    API_VERSION: '3',
    CLIENT_ID: '',
    buildOptions: (apiUrl, path, method) => {
        return { apiUrl, path, method };
    },
    bearer: ''
};

