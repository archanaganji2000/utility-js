const head=require('./head');
describe('head',()=>
{
    it('head of 10,2,3,4 is 10',()=>
    expect(head([10,2,3,4])).toEqual(10));

    it('head of [] is null',()=>
    expect(head([])).toEqual([]));

});
 