import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Gallery Post Endpoint', () => {
    describe('GET', () => {
        const hash = 2;
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'get');
                promise = imgur.gallery.post.get(hash);
            });
            afterEach(() => {
                imgur.gallery.post.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.post.get).to.have.been.calledOnce;
            });

            it('should have been run with a the correct arguments', () => {
                expect(imgur.gallery.post.get).to.have.been.calledWith(hash);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'imgurAPICall');
                promise = imgur.gallery.post.get(hash);
            });
            afterEach(() => {
                imgur.gallery.post.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `gallery/${hash}`,
                    method: "get",
                    body: {}
                });
            });
        });
    });

    describe('Report Post Endpoint', () => {
        const hash = 2;
        const reason = 5;
        let promise;

        describe('synchronous Report function', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'report');
                promise = imgur.gallery.post.report(hash, reason);
            });
            afterEach(() => {
                imgur.gallery.post.report.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.post.report).to.have.been.calledOnce;
            });

            it('should have been run with a the correct arguments', () => {
                expect(imgur.gallery.post.report).to.have.been.calledWith(hash, reason);
            });

        });

        describe('synchronous Report function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'imgurAPICall');
                promise = imgur.gallery.post.report(hash, reason);
            });
            afterEach(() => {
                imgur.gallery.post.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `gallery/${hash}/report`,
                    method: "post",
                    body: {reason: reason}
                });
            });
        });
    });
});
