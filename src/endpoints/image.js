import imgurEndpoint from '../ImgurEndpoint';
import _ from 'lodash';

export default _.extend(imgurEndpoint, {
    path: 'image',
    get: function (hash, cb) {
        return imgurEndpoint.imgurMethod({
            path: [this.path, hash].join('/'),
            cb: cb
        });
    }
});
