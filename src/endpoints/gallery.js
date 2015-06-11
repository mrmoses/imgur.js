import endpoint from '../endpoint';
import utils from '../utils';
import galleryCommentsEndpoint from '../endpoints/gallery/comments';
import galleryPostEndpoint from '../endpoints/gallery/post';

export default endpoint({
    path: 'gallery',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    get(section='hot', sort='viral', page=0, showViral=true) {
        const requestPath = `${this.path}/${section}/${sort}/${page}?showViral=${showViral}`;
        const options = utils.buildOptions(this.apiUrl, requestPath, 'get');

        return this.imgurAPICall(options);
    },
    comments: galleryCommentsEndpoint,
    post: galleryPostEndpoint
});
