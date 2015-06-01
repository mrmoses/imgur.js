(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('superagent-bluebird-promise')) : typeof define === 'function' && define.amd ? define(['lodash', 'superagent-bluebird-promise'], factory) : global.imgur = factory(global._, global.request);
})(this, function (_, request) {
    'use strict';

    var utils_js__utils = {
        API_URL: 'https://api.imgur.com',
        API_VERSION: '3',
        CLIENT_ID: '',
        buildOptions: function buildOptions(apiUrl, path, method) {
            return { apiUrl: apiUrl, path: path, method: method };
        }
    };

    var utils_js = utils_js__utils;

    var _imgurAPICall__imgurAPICall = function _imgurAPICall__imgurAPICall(options) {
        ['method', 'apiUrl', 'path'].forEach(function (option) {
            if (!options[option]) {
                throw new Error(option + ' must be specified');
            }
        });
        var body = options.body || {};
        if (options.bearer) {}
        var authToken = 'Client-ID ' + utils_js.CLIENT_ID;
        return request[options.method]([options.apiUrl, options.path].join('/')).send(body).set('Authorization', authToken).promise();
    };

    var _imgurAPICall = _imgurAPICall__imgurAPICall;

    var _endpoint__endpoint = function _endpoint__endpoint(options) {
        options.imgurAPICall = _.bind(_imgurAPICall, options);
        options.apiUrl = options.apiUrl || [utils_js.API_URL, utils_js.API_VERSION].join('/');
        return options;
    };

    var _endpoint = _endpoint__endpoint;

    var imageEndpoint = _endpoint({
        path: 'image',
        apiUrl: [utils_js.API_URL, utils_js.API_VERSION].join('/'),
        get: function get(hash) {
            var options = utils_js.buildOptions(this.apiUrl, [this.path, hash].join('/'), 'get');
            return this.imgurAPICall(options);
        }
    });

    var oauth2Endpoint = _endpoint({
        path: 'oauth2',
        apiUrl: utils_js.API_URL,
        get: function get(responseType) {
            var resType = responseType || 'token';
            var queryString = '?' + ['response_type=' + resType, 'client_id=' + utils_js.CLIENT_ID].join('&');

            var path = [this.path, 'authorize'].join('/') + queryString;
            var options = utils_js.buildOptions(this.apiUrl, path, 'get');

            return this.imgurAPICall(options);
        },
        refresh: function refresh(refreshToken, clientSecret) {
            var queryString = '?' + ['refresh_token=' + refreshToken, 'client_id=' + utils_js.CLIENT_ID, 'client_secret=' + clientSecret, 'grant_type=refresh_token'].join('&');

            var path = [this.path, 'token'].join('/') + queryString;
            var options = utils_js.buildOptions(this.apiUrl, path, 'post');

            return this.imgurAPICall(options);
        } });

    var topicsEndpoint = _endpoint({
        path: 'topics',
        apiUrl: [utils_js.API_URL, utils_js.API_VERSION].join('/'),
        get: function get(topicId) {
            var sort = arguments[1] === undefined ? 'viral' : arguments[1];
            var page = arguments[2] === undefined ? 0 : arguments[2];

            var requestPath = [this.path, topicId, sort, page].join('/');
            var options = utils_js.buildOptions(this.apiUrl, requestPath, 'get');
            return this.imgurAPICall(options);
        }
    });

    var _imgur__Imgur = function _imgur__Imgur(clientKey) {
        if (!clientKey) {
            throw new Error('Client Key required to initialize imgur client');
        }
        var endpoints = {
            image: imageEndpoint,
            oauth2: oauth2Endpoint,
            topics: topicsEndpoint
        };

        utils_js.CLIENT_ID = clientKey;

        var imgur = {
            imgurAPICall: _imgurAPICall
        };

        imgur.CLIENT_ID = clientKey;

        _.forEach(endpoints, function (value, key) {
            imgur[key] = value;
        });

        return imgur;
    };

    var _imgur = _imgur__Imgur;

    return _imgur;
});
//# sourceMappingURL=./imgur.js.map