(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('superagent')) : typeof define === 'function' && define.amd ? define(['lodash', 'superagent'], factory) : global.imgur = factory(global._, global.request);
})(this, function (_, request) {
    'use strict';

    var utils_js__utils = {
        API_URL: 'https://api.imgur.com/3',
        CLIENT_ID: ''
    };

    var utils_js = utils_js__utils;

    var imgurMethod = function imgurMethod(options) {
        if (!options.cb) {
            throw new Error('cb must be specified');
        }
        request.get([utils_js.API_URL, options.path].join('/')).set('Authorization', 'Client-ID ' + utils_js.CLIENT_ID).end(options.cb);
    };

    var ImgurMethod = imgurMethod;

    var imgurEndpoint = {
        path: '',
        imgurMethod: ImgurMethod
    };

    var ImgurEndpoint = imgurEndpoint;

    var imageEndpoint = _.extend(ImgurEndpoint, {
        path: 'image',
        get: function get(hash, cb) {
            return ImgurEndpoint.imgurMethod({
                path: [this.path, hash].join('/'),
                cb: cb
            });
        }
    });

    var _imgur__Imgur = function _imgur__Imgur(clientKey) {
        var endpoints = {
            image: imageEndpoint
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