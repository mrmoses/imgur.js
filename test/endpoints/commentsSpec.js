import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Comment Action Endpoints', () => {
    describe('upvote', () => {
        const id = 1;
        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'upvote');
                promise = imgur.comment.upvote(id);
            });
            afterEach(() => {
                imgur.comment.upvote.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.upvote).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.upvote).to.have.been.calledWith(id);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.upvote(id);
            });
            afterEach(() => {
                imgur.comment.imgurAPICall.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `comment/${id}/vote/up`,
                    method: "post",
                    body: {}
                });
            });
        });

    });

    describe('downvote', () => {
        const id = 1;
        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'downvote');
                promise = imgur.comment.downvote(id);
            });
            afterEach(() => {
                imgur.comment.downvote.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.downvote).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.downvote).to.have.been.calledWith(id);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.downvote(id);
            });
            afterEach(() => {
                imgur.comment.imgurAPICall.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `comment/${id}/vote/down`,
                    method: "post",
                    body: {}
                });
            });
        });

    });

    describe('report', () => {
        const id = 1;
        const reason = 5;
        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'report');
                promise = imgur.comment.report(id, reason);
            });
            afterEach(() => {
                imgur.comment.report.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.report).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.report).to.have.been.calledWith(id, reason);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.report(id, reason);
            });
            afterEach(() => {
                imgur.comment.imgurAPICall.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `comment/${id}/report`,
                    method: "post",
                    body: {reason: reason}
                });
            });
        });

    });

    describe('deleteComment', () => {
        const id = 1;
        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'deleteComment');
                promise = imgur.comment.deleteComment(id);
            });
            afterEach(() => {
                imgur.comment.deleteComment.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.deleteComment).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.deleteComment).to.have.been.calledWith(id);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.deleteComment(id);
            });
            afterEach(() => {
                imgur.comment.imgurAPICall.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `comment/${id}`,
                    method: "delete",
                    body: {}
                });
            });
        });

    });
});
