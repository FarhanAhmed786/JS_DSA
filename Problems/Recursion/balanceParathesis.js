function balancePar(array,start=0,curr=0){
    if(start == array.length){
        return curr == 0 ? true:false;
    }
    if(curr<0)
        return false;
    if(array[start]==="(")
        balancePar(array,start+1,curr+1)
    else if(array[start]==")")
        balancePar(array,start+1,curr-1)
    else
        return false;

}