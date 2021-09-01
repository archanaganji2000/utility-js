const tail=(array)=>
{
    if(array.length==0) return null;
    return array.slice(1,);
};
module.exports=tail;