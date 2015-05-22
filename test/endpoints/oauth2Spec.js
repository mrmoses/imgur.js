import Imgur from '../../build/imgur';
let imgur = Imgur('testKey');

describe('oauth2 Endpoint', () => {
    describe('.get', () => {
        let promise;
        const responseType = 'token';

        describe('GET function', () => {
            beforeEach(() => {
                stub(imgur.oauth2, 'get');
                promise = imgur.oauth2.get(responseType);
            });
            afterEach(() => {
                imgur.oauth2.get.restore();
            });

            it('should have been run once', () => {
                expect(imgur.oauth2.get).to.have.been.calledOnce;
            });

            it('should have been run with a hash', () => {
                expect(imgur.oauth2.get).to.have.been.calledWith(responseType);
            });
        });

        describe('GET function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.oauth2, 'imgurAPICall');
                imgur.oauth2.get(responseType);
            });
            afterEach(() => {
                imgur.oauth2.imgurAPICall.restore();
            });

            it('should call imgurAPICall', () => {
                expect(imgur.oauth2.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.oauth2.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com",
                    path: 'oauth2/authorize?response_type=token&client_id=testKey',
                    method: "get"
                });
            });
        });
    });
    describe('.refresh', () => {
        let promise;
        const refreshToken = 'testRefreshToken';
        const clientSecret = 'testClientSecret';

        describe('refresh function', () => {
            beforeEach(() => {
                stub(imgur.oauth2, 'refresh');
                promise = imgur.oauth2.refresh(refreshToken, clientSecret);
            });
            afterEach(() => {
                imgur.oauth2.refresh.restore();
            });

            it('should have been run once', () => {
                expect(imgur.oauth2.refresh).to.have.been.calledOnce;
            });

            it('should have been run with a hash', () => {
                expect(imgur.oauth2.refresh).to.have.been.calledWith(refreshToken, clientSecret);
            });
        });

        describe('refresh function call to imgurAPICall', () => {
            beforeEach(() => {
                stub(imgur.oauth2, 'imgurAPICall');
                promise = imgur.oauth2.refresh(refreshToken, clientSecret);
            });
            afterEach(() => {
                imgur.oauth2.imgurAPICall.restore();
            });

            it('should call imgurAPICall', () => {
                expect(imgur.oauth2.imgurAPICall).to.have.been.calledOnce;
            });

            it('should call imgurAPICall', () => {
                expect(imgur.oauth2.imgurAPICall).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com",
                    path: 'oauth2/token?refresh_token=testRefreshToken&client_id=testKey&client_secret=testClientSecret&grant_type=refresh_token',
                    method: "post"
                });
            });
        });
    });
});
