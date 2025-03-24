// let string = "aabcc"

function removeAdjDup(string){
    let result = ""
    for (let i = 0; i < string.length; i++) {
        if(i === string.length-1 || string[i] !== string[i+1]){
            result += string[i]
        }
    }
    return result
}
// console.log(removeAdjDup("aabcc"))

// varitaion 1 where we need to remove duplicate occurence only once
function recursiveRAD(string){
    
    if(string.length<= 1)
        return string
    if(string[0] == string[1])
        return recursiveRAD(string.substring(1))
    return string[0] + recursiveRAD(string.substring(1))
}

// variation 2 where we need to remove duplicate elenment from string
function recursiveRAD2(string){
    
    if(string.length<= 1)
        return string
    if(string[0] == string[1])
        return recursiveRAD2(string.substring(2))
    return string[0] + recursiveRAD2(string.substring(1))
}
console.log(recursiveRAD2("helloor"));
