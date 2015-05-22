import Imgur from '../../lib/imgur';
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

        describe('synchronous GET function call to imgurMethod', () => {
            beforeEach(() => {
                stub(imgur.image, 'imgurMethod');
                promise = imgur.image.get(hash);
            });
            afterEach(() => {
                imgur.image.imgurMethod.restore();
            });


            it('should call imgurMethod', () => {
                expect(imgur.image.imgurMethod).to.have.been.calledOnce;
            });

            it('should call imgurMethod', () => {
                expect(imgur.image.imgurMethod).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: 'image/' + hash,
                    method: "get"
                });
            });
        });
    });
});
