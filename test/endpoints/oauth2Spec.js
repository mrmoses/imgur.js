import Imgur from '../../lib/imgur';
let imgur = Imgur('testKey');

describe('oauth2 Endpoint', () => {
    describe('GET', () => {
        let cbSpy;
        let responseType = 'token';

        describe('GET function', () => {
            beforeEach(() => {
                cbSpy = spy();
                spy(imgur.oauth2, 'get');
                imgur.oauth2.get(responseType, cbSpy);
            });

            it('should have been run once', () => {
                expect(imgur.oauth2.get).to.have.been.calledOnce;
            });

            it('should have been run with a hash', () => {
                expect(imgur.oauth2.get).to.have.been.calledWith(responseType);
            });
        });

        describe('GET function call to imgurMethod', () => {
            beforeEach(() => {
                cbSpy = spy();
                spy(imgur.oauth2, 'imgurMethod');
                imgur.oauth2.get(responseType, cbSpy);
            });

            it('should call imgurMethod', () => {
                expect(imgur.oauth2.imgurMethod).to.have.been.calledOnce;
            });

            it('should call imgurMethod', () => {
                expect(imgur.oauth2.imgurMethod).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com",
                    cb: cbSpy,
                    path: 'oauth2/authorize?response_type=token&client_id=testKey',
                    method: "get"
                });
            });
        });
    });
});
