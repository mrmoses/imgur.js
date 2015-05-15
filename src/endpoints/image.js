import imgurEndpoint from '../ImgurEndpoint';
import imgurMethod from '../ImgurMethod';
import _ from 'lodash';

let imageOptions = {
    path: '/image'
};

let getCb = function(err, res) {
    var global = global || window;
    global.stuff = [err, res];
};

let get = function (hash) {
    return imgurMethod(_.extend(imageOptions, {
        hash: hash,
        cb: getCb
    }));
};

export default _.extend(imgurEndpoint, { get: get } );
