const filter=(array,fun)=>
{
    if(array.length==0)
    return null;
    return array.filter(eval(fun));

};


module.exports = filter;