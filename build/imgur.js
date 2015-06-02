(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('superagent-bluebird-promise'), require('lodash')) : typeof define === 'function' && define.amd ? define(['superagent-bluebird-promise', 'lodash'], factory) : global.imgur = factory(global.request, global._);
})(this, function (request, _) {
    'use strict';

    var utils = {
        API_URL: 'https://api.imgur.com',
        API_VERSION: '3',
        CLIENT_ID: '',
        buildOptions: function buildOptions(apiUrl, path, method) {
            return { apiUrl: apiUrl, path: path, method: method };
        },
        bearer: ''
    };

    var imgurAPICall = function imgurAPICall(options) {
        ['method', 'apiUrl', 'path'].forEach(function (option) {
            if (!options[option]) {
                throw new Error('' + option + ' must be specified');
            }
        });

        var authToken = 'Client-ID ' + utils.CLIENT_ID;
        var body = options.body || {};

        if (utils.BEARER) {
            authToken = 'Bearer ' + utils.BEARER;
        }

        return request[options.method]('' + options.apiUrl + '/' + options.path).send(body).set('Authorization', authToken).promise();
    };

    var endpoint = function endpoint(options) {
        options.imgurAPICall = _.bind(imgurAPICall, options);
        options.apiUrl = options.apiUrl || '' + utils.API_URL + '/' + utils.API_VERSION;

        return options;
    };

    var imageEndpoint = endpoint({
        path: 'image',
        apiUrl: '' + utils.API_URL + '/' + utils.API_VERSION,
        get: function get(hash) {
            var options = utils.buildOptions(this.apiUrl, '' + this.path + '/' + hash, 'get');

            return this.imgurAPICall(options);
        }
    });

    var oauth2Endpoint = endpoint({
        path: 'oauth2',
        apiUrl: utils.API_URL,
        get: function get(responseType) {
            var resType = responseType || 'token';
            var queryString = '?' + ['response_type=' + resType, 'client_id=' + utils.CLIENT_ID].join('&');

            var path = '' + this.path + '/authorize' + queryString;
            var options = utils.buildOptions(this.apiUrl, path, 'get');

            return this.imgurAPICall(options);
        },
        refresh: function refresh(refreshToken, clientSecret) {
            var queryString = '?' + ['refresh_token=' + refreshToken, 'client_id=' + utils.CLIENT_ID, 'client_secret=' + clientSecret, 'grant_type=refresh_token'].join('&');

            var path = '' + this.path + '/token' + queryString;
            var options = utils.buildOptions(this.apiUrl, path, 'post');

            return this.imgurAPICall(options);
        }
    });

    var topicsEndpoint = endpoint({
        path: 'topics',
        apiUrl: '' + utils.API_URL + '/' + utils.API_VERSION,
        get: function get(topicId) {
            var sort = arguments[1] === undefined ? 'viral' : arguments[1];
            var page = arguments[2] === undefined ? 0 : arguments[2];

            var requestPath = '' + this.path + '/' + topicId + '/' + sort + '/' + page;
            var options = utils.buildOptions(this.apiUrl, requestPath, 'get');

            return this.imgurAPICall(options);
        }
    });

    var imgur = function imgur(clientKey) {
        var setUtil = function setUtil(key, value) {
            utils[key] = value;
        };

        var getUtil = function getUtil(key) {
            return utils[key];
        };

        if (!clientKey) {
            throw new Error('Client Key required to initialize imgur client');
        }

        setUtil('CLIENT_ID', clientKey);

        return {
            imgurAPICall: imgurAPICall,
            CLIENT_ID: clientKey,
            image: imageEndpoint,
            oauth2: oauth2Endpoint,
            topics: topicsEndpoint,
            setUtil: setUtil,
            getUtil: getUtil
        };
    };

    return imgur;
});
//# sourceMappingURL=./imgur.js.map