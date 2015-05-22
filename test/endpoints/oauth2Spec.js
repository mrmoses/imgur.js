import Imgur from '../../lib/imgur';
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

        describe('GET function call to imgurMethod', () => {
            beforeEach(() => {
                stub(imgur.oauth2, 'imgurMethod');
                imgur.oauth2.get(responseType);
            });
            afterEach(() => {
                imgur.oauth2.imgurMethod.restore();
            });

            it('should call imgurMethod', () => {
                expect(imgur.oauth2.imgurMethod).to.have.been.calledOnce;
            });

            it('should call imgurMethod', () => {
                expect(imgur.oauth2.imgurMethod).to.have.been.calledWith({
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

        describe('refresh function call to imgurMethod', () => {
            beforeEach(() => {
                stub(imgur.oauth2, 'imgurMethod');
                promise = imgur.oauth2.refresh(refreshToken, clientSecret);
            });
            afterEach(() => {
                imgur.oauth2.imgurMethod.restore();
            });

            it('should call imgurMethod', () => {
                expect(imgur.oauth2.imgurMethod).to.have.been.calledOnce;
            });

            it('should call imgurMethod', () => {
                expect(imgur.oauth2.imgurMethod).to.have.been.calledWith({
                    apiUrl: "https://api.imgur.com",
                    path: 'oauth2/token?refresh_token=testRefreshToken&client_id=testKey&client_secret=testClientSecret&grant_type=refresh_token',
                    method: "post"
                });
            });
        });
    });
});
