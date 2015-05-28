import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Topics Endpoint', () => {
    describe('GET', () => {
        const page = 0;
        const topicId = 2;
        const sort = 'hot';
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.topics, 'get');
                promise = imgur.topics.get(topicId, sort, page);
            });
            afterEach(() => {
                imgur.topics.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.topics.get).to.have.been.calledOnce;
            });

            it('should have been run with a the correct arguments', () => {
                expect(imgur.topics.get).to.have.been.calledWith(topicId, sort, page);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.topics, 'imgurAPICall');
                promise = imgur.topics.get(topicId, sort, page);
            });
            afterEach(() => {
                imgur.topics.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.topics.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.topics.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: ['topics', topicId, sort, page].join('/'),
                    method: "get"
                });
            });
        });
    });
});
