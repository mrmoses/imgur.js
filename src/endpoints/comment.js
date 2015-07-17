import endpoint from '../endpoint';
import utils from '../utils';

export default endpoint({
    path: 'comment',
    apiUrl: `${utils.API_URL}/${utils.API_VERSION}`,
    downvote(commentId) {
        const path = `${this.path}/${commentId}/vote/down`;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },
    upvote(commentId) {
        const path = `${this.path}/${commentId}/vote/up`;
        const options = utils.buildOptions(this.apiUrl, path, 'post');

        return this.imgurAPICall(options);
    },
    report(commentId, reason) {
        const path = `${this.path}/${commentId}/report`;
        const options = utils.buildOptions(this.apiUrl, path, 'post', { reason });

        return this.imgurAPICall(options);
    },
    deleteComment(commentId) {
        const path = `${this.path}/${commentId}`;
        const options = utils.buildOptions(this.apiUrl, path, 'delete');

        return this.imgurAPICall(options);
    }
});

