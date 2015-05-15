(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('superagent')) : typeof define === 'function' && define.amd ? define(['lodash', 'superagent'], factory) : global.imgur = factory(global._, global.request);
})(this, function (_, request) {
    'use strict';

    var imgurEndpoint = {
        path: ''
    };

    var ImgurEndpoint = imgurEndpoint;

    var utils_js__utils = {
        API_URL: 'https://api.imgur.com/3/',
        CLIENT_ID: 'b45d8d58680bb94'
    };

    var utils_js = utils_js__utils;

    var imgurMethod = function imgurMethod(options) {
        request.get(utils_js.API_URL + options.path).end(options.cb);
    };
    var ImgurMethod = imgurMethod;

    var imageEndpoint__imageOptions = {
        path: '/image'
    };

    var imageEndpoint__getCb = function imageEndpoint__getCb(err, res) {
        var global = global || window;
        global.stuff = [err, res];
    };

    var imageEndpoint__get = function imageEndpoint__get(hash) {
        return ImgurMethod(_.extend(imageEndpoint__imageOptions, {
            hash: hash,
            cb: imageEndpoint__getCb
        }));
    };

    var imageEndpoint = _.extend(ImgurEndpoint, { get: imageEndpoint__get });

    var imgur = {
        image: imageEndpoint
    };

    var _imgur = imgur;

    return _imgur;
});
//# sourceMappingURL=./imgur.js.map