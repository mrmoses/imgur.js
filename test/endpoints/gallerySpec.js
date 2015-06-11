import Imgur from '../../build/imgur';
import request from 'superagent-bluebird-promise';
const imgur = Imgur('testKey');

describe('Gallery Endpoint', () => {
    describe('GET', () => {
        const section = 'hot';
        const sort = 'best';
        const page = 0;
        const showViral = false;
        let promise;

        describe('synchronous GET function', () => {
            beforeEach(() => {
                stub(imgur.gallery, 'get');
                promise = imgur.gallery.get(section, sort, page, showViral);
            });
            afterEach(() => {
                imgur.gallery.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.gallery.get).to.have.been.calledOnce;
            });

            it('should have been run with a the correct arguments', () => {
                expect(imgur.gallery.get).to.have.been.calledWith(section, sort, page, showViral);
            });

        });

        describe('synchronous GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.gallery, 'imgurAPICall');
                promise = imgur.gallery.get(section, sort, page, showViral);
            });
            afterEach(() => {
                imgur.gallery.imgurAPICall.restore();
            });


            it('should call imgurAPICall', () => {
                expect(imgur.gallery.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.gallery.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com/3",
                    path: `${['gallery', section, sort, page].join('/')}?showViral=${showViral}`,
                    method: "get"
                });
            });
        });
    });
});
