const tail=require('./tail');
describe('tail',()=>
{
    it('tail of [1,2,10] is [2,10]',()=>
    expect(tail([1,2,10])).toEqual([2,10]));
    it('tail of [] is nulll',()=>
    expect(tail([])).toEqual(null));

});


 