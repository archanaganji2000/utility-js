const reduce = (array,previous, initial) =>{
        if(initial == null && array.length == 0) {
            return undefined;
        }
        else if(initial==null && array.length!=0)
        {
            return array.reduce(previous);
        }
       
    return array.reduce(previous,initial);
}
module.exports = reduce;