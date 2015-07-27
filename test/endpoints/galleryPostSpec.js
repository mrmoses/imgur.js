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

            it('should have been run with the correct arguments', () => {
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

            it('should have been run with the correct arguments', () => {
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

    describe('Upvote Post Endpoint', () => {
        const hash = 2;
        const hashError = 'hash must be specified';
        let promise;

        describe('synchronous Upvote function', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'upvote');
                promise = imgur.gallery.post.upvote(hash);
            });
            afterEach(() => {
                imgur.gallery.post.upvote.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.post.upvote).to.have.been.calledOnce;
            });

            it('should have been run with the correct arguments', () => {
                expect(imgur.gallery.post.upvote).to.have.been.calledWith(hash);
            });

        });

        describe('synchronous Upvote function call to _handleVote', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, '_handleVote');
                promise = imgur.gallery.post.upvote(hash);
            });
            afterEach(() => {
                imgur.gallery.post._handleVote.restore();
            });

            it('should call _handleVote', () => {
                expect(imgur.gallery.post._handleVote).to.have.been.calledOnce;
            });

            it('should call _handleVote', () => {
                expect(imgur.gallery.post._handleVote).to.have.been.calledWith(hash, 'up');
            });
        });

        describe('Check that error is thrown when id is not passed in', () => {
            it('should throw error', () => {
                expect(imgur.gallery.post.upvote.bind(imgur.gallery.post, undefined)).to.throw(hashError);
            });
        });

        describe('synchronous Upvote function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'imgurAPICall');
                promise = imgur.gallery.post.upvote(hash);
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
                    path: `gallery/${hash}/vote/up`,
                    method: "post",
                    body: {}
                });
            });
        });
    });

    describe('Downvote Post Endpoint', () => {
        const hash = 2;
        const hashError = 'hash must be specified';
        let promise;

        describe('synchronous Downvote function', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'downvote');
                promise = imgur.gallery.post.downvote(hash);
            });
            afterEach(() => {
                imgur.gallery.post.downvote.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.post.downvote).to.have.been.calledOnce;
            });

            it('should have been run with the correct arguments', () => {
                expect(imgur.gallery.post.downvote).to.have.been.calledWith(hash);
            });

        });

        describe('synchronous Downvote function call to _handleVote', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, '_handleVote');
                promise = imgur.gallery.post.downvote(hash);
            });
            afterEach(() => {
                imgur.gallery.post._handleVote.restore();
            });

            it('should call _handleVote', () => {
                expect(imgur.gallery.post._handleVote).to.have.been.calledOnce;
            });

            it('should call _handleVote', () => {
                expect(imgur.gallery.post._handleVote).to.have.been.calledWith(hash, 'down');
            });
        });

        describe('Check that error is thrown when post hash is not passed in', () => {
            it('should throw error', () => {
                expect(imgur.gallery.post.downvote.bind(imgur.gallery.post, undefined)).to.throw(hashError);
            });
        });

        describe('synchronous Downvote function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'imgurAPICall');
                promise = imgur.gallery.post.downvote(hash);
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
                    path: `gallery/${hash}/vote/down`,
                    method: "post",
                    body: {}
                });
            });
        });
    });

    describe('Favorite Endpoint', () => {
        const hash = 2;
        let isAlbum = false;
        const hashError = 'hash must be specified';
        let promise;

        describe('synchronous Favorite function', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'favorite');
                promise = imgur.gallery.post.favorite(hash, isAlbum);
            });
            afterEach(() => {
                imgur.gallery.post.favorite.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.post.favorite).to.have.been.calledOnce;
            });

            it('should have been run with the correct arguments', () => {
                expect(imgur.gallery.post.favorite).to.have.been.calledWith(hash, isAlbum);
            });

        });

        describe('synchronous Favorite function call to imgurAPICall as an image', () => {
            beforeEach(() => {
                stub(imgur.gallery.post, 'imgurAPICall');
                promise = imgur.gallery.post.favorite(hash, isAlbum);
            });
            afterEach(() => {
                imgur.gallery.post.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall and path should be to image', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `image/${hash}/favorite`,
                    method: "post",
                    body: {}
                });
            });
        });

        describe('synchronous Favorite function call to imgurAPICall as an album', () => {
            beforeEach(() => {
                isAlbum = true;
                stub(imgur.gallery.post, 'imgurAPICall');
                promise = imgur.gallery.post.favorite(hash, isAlbum);
            });
            afterEach(() => {
                imgur.gallery.post.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall and path should be to image', () => {
                expect(imgur.gallery.post.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `album/${hash}/favorite`,
                    method: "post",
                    body: {}
                });
            });
        });

        describe('Check that error is thrown when correct arguments are not passed in', () => {
            it('should throw post hash error', () => {
                expect(imgur.gallery.post.favorite.bind(imgur.gallery.post, undefined)).to.throw(hashError);
            });

            it('should throw isAlbum error', () => {
                expect(imgur.gallery.post.favorite.bind(imgur.gallery.post, hash)).to.throw('isAlbum with type boolean must be specified');
            });

            it('should throw isAlbum error due to boolean', () => {
                expect(imgur.gallery.post.favorite.bind(imgur.gallery.post, hash, 'true')).to.throw('isAlbum with type boolean must be specified');
            });
        });
    });
});
