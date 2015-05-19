(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('superagent')) : typeof define === 'function' && define.amd ? define(['lodash', 'superagent'], factory) : global.imgur = factory(global._, global.request);
})(this, function (_, request) {
    'use strict';

    var utils_js__utils = {
        API_URL: 'https://api.imgur.com',
        API_VERSION: '3',
        CLIENT_ID: ''
    };

    var utils_js = utils_js__utils;

    var imgurMethod = function imgurMethod(options) {
        _.forEach(['cb', 'method', 'apiUrl', 'path'], function (option) {
            if (!options[option]) {
                throw new Error(option + ' must be specified');
            }
        });
        request[options.method]([options.apiUrl, options.path].join('/')).set('Authorization', 'Client-ID ' + utils_js.CLIENT_ID).end(options.cb);
    };

    var ImgurMethod = imgurMethod;

    var imgurEndpoint = function imgurEndpoint(options) {
        options.imgurMethod = _.bind(ImgurMethod, options);
        options.apiUrl = options.apiUrl || [utils_js.API_URL, utils_js.API_VERSION].join('/');
        return options;
    };

    var ImgurEndpoint = imgurEndpoint;

    var imageEndpoint = ImgurEndpoint({
        path: 'image',
        apiUrl: [utils_js.API_URL, utils_js.API_VERSION].join('/'),
        get: function get(hash, cb) {
            return this.imgurMethod({
                path: [this.path, hash].join('/'),
                cb: cb,
                method: 'get',
                apiUrl: this.apiUrl
            });
        }
    });

    var oauth2Endpoint = ImgurEndpoint({
        path: 'oauth2',
        apiUrl: utils_js.API_URL,
        get: function get(responseType, cb) {
            var queryString = '?' + ['response_type=' + (responseType || 'token'), 'client_id=' + utils_js.CLIENT_ID].join('&');

            var options = {
                apiUrl: this.apiUrl,
                path: [this.path, 'authorize'].join('/') + queryString,
                cb: cb,
                method: 'get'
            };

            return this.imgurMethod(options);
        }
    });

    var Imgur = function Imgur(clientKey) {
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

    var _imgur = Imgur;

    return _imgur;
});
//# sourceMappingURL=./imgur.js.map