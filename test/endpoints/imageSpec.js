import imgur from '../../lib/imgur';

describe('Image Endpoint', () => {
    describe('GET', () => {
        beforeEach(() => {
            spy(imgur.image, 'get');
            imgur.image.get('Ra0aI');
        });

        it('should have been run once', () => {
            expect(imgur.image.get).to.have.been.calledOnce;
        });
    });
});
