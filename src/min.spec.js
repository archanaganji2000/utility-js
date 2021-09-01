const min=require('./min');

describe('min',()=>{
    it('min of 4 5 2 1',()=>{
        expect(min([4,5,2,1])).toEqual(1);
    });
    it('min of []',()=>
    {
        expect(min([])).toEqual(null);
    });


});
