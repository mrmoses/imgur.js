import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Gallery Post Comments Endpoint', () => {
    describe('GET', () => {
        const page = 0;
        const hash = 2;
        const sort = 'best';
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.gallery.post.comments, 'get');
                promise = imgur.gallery.post.comments.get(hash, sort);
            });
            afterEach(() => {
                imgur.gallery.post.comments.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.post.comments.get).to.have.been.calledOnce;
            });

            it('should have been run with a the correct arguments', () => {
                expect(imgur.gallery.post.comments.get).to.have.been.calledWith(hash, sort);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.gallery.post.comments, 'imgurAPICall');
                promise = imgur.gallery.post.comments.get(hash, sort);
            });
            afterEach(() => {
                imgur.gallery.post.comments.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.comments.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.comments.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: ['gallery', hash, 'comments', sort].join('/'),
                    method: "get",
                    body: {}
                });
            });
        });
    });
});
