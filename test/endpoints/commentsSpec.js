import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Comment Action Endpoints', () => {
    const idError = 'commentId must be specified';
    describe('get', () => {
        const id = 1;
        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'get');
                promise = imgur.comment.get(id);
            });
            afterEach(() => {
                imgur.comment.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.get).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.get).to.have.been.calledWith(id);
            });
        });

        describe('Check that error is thrown when id is not passed in', () => {
            it('should throw error', () => {
                expect(imgur.comment.get.bind(imgur.comment, undefined)).to.throw(idError);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.get(id);
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
                    method: "get",
                    body: {}
                });
            });
        });
    });
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

        describe('Check that error is thrown when id is not passed in', () => {
            it('should throw error', () => {
                expect(imgur.comment.upvote.bind(imgur.comment, undefined)).to.throw(idError);
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

        describe('Check that error is thrown when id is not passed in', () => {
            it('should throw error', () => {
                expect(imgur.comment.downvote.bind(imgur.comment, undefined)).to.throw(idError);
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

        describe('Check that error is thrown', () => {
            it('should throw error when no commentId is added', () => {
                expect(imgur.comment.report.bind(imgur.comment, undefined)).to.throw(idError);
            });

            it('should throw error when reason is not an integer', () => {
                expect(imgur.comment.report.bind(imgur.comment, id, 'hi')).to.throw('the reason must be an integer');
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

        describe('Check that error is thrown when id is not passed in', () => {
            it('should throw error', () => {
                expect(imgur.comment.deleteComment.bind(imgur.comment, undefined)).to.throw(idError);
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

    describe('submitComment', () => {
        const params = {
            'image_id': 'g1GLByF',
            'comment': 'This is the comment text for a test'
        };

        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'submitComment');
                promise = imgur.comment.submitComment(params);
            });
            afterEach(() => {
                imgur.comment.submitComment.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.submitComment).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.submitComment).to.have.been.calledWith(params);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.submitComment(params);
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
                    path: `comment`,
                    method: "post",
                    body: params
                });
            });
        });
    });

    describe('submitReply', () => {
        const params = {
            'image_id': 'g1GLByF',
            'comment': 'This is the comment text for a test',
            'parent_id': '449944053'
        };

        let promise;

        describe('Check that function exists and params are correct', () => {
            beforeEach(() => {
                stub(imgur.comment, 'submitReply');
                promise = imgur.comment.submitReply(params);
            });
            afterEach(() => {
                imgur.comment.submitReply.restore();
            });

            it('should have been run once', () => {
                expect(imgur.comment.submitReply).to.have.been.calledOnce;
            });

            it('should have been run with correct arguments', () => {
                expect(imgur.comment.submitReply).to.have.been.calledWith(params);
            });
        });

        describe('check call on imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.comment, 'imgurAPICall');
                promise = imgur.comment.submitReply(params);
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
                    path: `comment`,
                    method: "post",
                    body: params
                });
            });
        });
    });
});
