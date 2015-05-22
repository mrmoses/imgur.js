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

    var ImgurMethod__imgurMethod = function ImgurMethod__imgurMethod(options) {
        ['method', 'apiUrl', 'path'].forEach(function (option) {

            if (!options[option]) {
                throw new Error(option + ' must be specified');
            }
        });
        return request[options.method]([options.apiUrl, options.path].join('/')).set('Authorization', 'Client-ID ' + utils_js.CLIENT_ID).promise();
    };

    var ImgurMethod = ImgurMethod__imgurMethod;

    var ImgurEndpoint__imgurEndpoint = function ImgurEndpoint__imgurEndpoint(options) {
        options.imgurMethod = _.bind(ImgurMethod, options);
        options.apiUrl = options.apiUrl || [utils_js.API_URL, utils_js.API_VERSION].join('/');
        return options;
    };

    var ImgurEndpoint = ImgurEndpoint__imgurEndpoint;

    var imageEndpoint = ImgurEndpoint({
        path: 'image',
        apiUrl: [utils_js.API_URL, utils_js.API_VERSION].join('/'),
        get: function get(hash) {
            var options = utils_js.buildOptions(this.apiUrl, [this.path, hash].join('/'), 'get');
            return this.imgurMethod(options);
        }
    });

    var oauth2Endpoint = ImgurEndpoint({
        path: 'oauth2',
        apiUrl: utils_js.API_URL,
        get: function get(responseType) {
            var resType = responseType || 'token';
            var queryString = '?' + ['response_type=' + resType, 'client_id=' + utils_js.CLIENT_ID].join('&');

            var path = [this.path, 'authorize'].join('/') + queryString;
            var options = utils_js.buildOptions(this.apiUrl, path, 'get');

            return this.imgurMethod(options);
        },
        refresh: function refresh(refreshToken, clientSecret) {
            var queryString = '?' + ['refresh_token=' + refreshToken, 'client_id=' + utils_js.CLIENT_ID, 'client_secret=' + clientSecret, 'grant_type=refresh_token'].join('&');

            var path = [this.path, 'token'].join('/') + queryString;
            var options = utils_js.buildOptions(this.apiUrl, path, 'post');

            return this.imgurMethod(options);
        }
    });

    var _imgur__Imgur = function _imgur__Imgur(clientKey) {
        if (!clientKey) {
            throw new Error('Client Key required to initialize imgur client');
        }
        var endpoints = {
            image: imageEndpoint,
            oauth2: oauth2Endpoint
        };

        utils_js.CLIENT_ID = clientKey;

        var imgur = {
            ImgurEndpoint: ImgurEndpoint,
            ImgurMethod: ImgurMethod
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