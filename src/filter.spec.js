const filter=require('./filter');

describe('filter',()=>
{
    it('filter([], x => true) should give []',()=>
    {
    expect(filter([],x=> true)).toEqual(null);
    });
    

    it('filter([1,2,3],x => true) should give [1,2,3]',()=>
    {
    expect(filter([1,2,3],x=> true)).toEqual([1,2,3]);
    });

    it('filter([1,2,3],x => false) should give []',()=>{
    expect(filter([1,2,3],x=>false)).toEqual([])
    });

    it('filter([a,B,c,D], filterUpperCase) should be [B,D]',()=>
    {
        expect(filter(['a','B','c','D'],x=> x == x.toUpperCase())).toEqual(['B','D'])

    });

    it('Filter of [1,2,3] and x => x>1 is [2,3]', () => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });

});