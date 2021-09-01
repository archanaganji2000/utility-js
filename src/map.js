const cube=(array_number)=>
{
    
    return Math.pow(array_number,3);
};
const identity =(array_number)=>
{
    return array_number;
};
const map=(array,fun) =>
{
    if(array.length==0)
    return null;
    return array.map(eval(fun));
};

module.exports=map;


