import utils from './utils.js';
import request from 'superagent-bluebird-promise';

export default function(options) {
    ['method', 'apiUrl', 'path'].forEach(option => {
        if (!options[option]) {
            throw new Error(`${option} must be specified`);
        }
    });

    let authToken = `Client-ID ${utils.CLIENT_ID}`;
    const body = options.body || {};

    if(utils.BEARER) {
        authToken = `Bearer ${utils.BEARER}`;
    }

    return request[options.method](`${options.apiUrl}/${options.path}`)
        .send(body)
        .set('Authorization', authToken)
        .promise();
};

