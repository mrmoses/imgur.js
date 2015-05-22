import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
let imgur = Imgur('testKey');


describe('Image Endpoint', () => {
    describe('GET', () => {
        let hash = 'ep6zWD9';
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.image, 'get');
                promise = imgur.image.get(hash);
            });
            afterEach(() => {
                imgur.image.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.image.get).to.have.been.calledOnce;
            });

            it('should have been run with a hash', () => {
                expect(imgur.image.get).to.have.been.calledWith(hash);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.image, 'imgurAPICall');
                promise = imgur.image.get(hash);
            });
            afterEach(() => {
                imgur.image.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.image.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.image.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: 'image/' + hash,
                    method: "get"
                });
            });
        });
    });
});
