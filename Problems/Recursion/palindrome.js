function recursivePal(string){
    if(string.length === 1 || string.length === 0)
        return true
    if(string[0] === string[string.length-1])
        return recursivePal(string.substring(1,string.length-1))
    else
        return false;
}
console.log(recursivePal("farhan"));
console.log(recursivePal("madam"));
console.log(recursivePal("maam"));
