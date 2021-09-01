const sub = require('./sub');

describe('sub', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(sub(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(sub(1, 0)).toEqual(1);
    });

})
