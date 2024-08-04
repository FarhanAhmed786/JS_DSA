// task is to remove all tabs and space from a inputString
// this includes the character \t and " " from a string

        function removeTandS(string){
    let result = ""
    for(let i = 0;i<string.length;i++){
        let char = string[i]
        if(char != " " && char != "\t"){
            result +=char
        }
    }
    return result
}
// console.log(removeTandS("  far h    an "));

function recurrsiveTAS(inputString){
    if(inputString.length === 0)
        return " "

    let fisrstChar = inputString[0]
    let restOfString = inputString.slice(1)

    if(fisrstChar === "" && fisrstChar === "\t"){
        return recurrsiveTAS(restOfString)
    }else{
        return fisrstChar + recurrsiveTAS(restOfString)
    }

    
}
console.log(recurrsiveTAS("Hel Wo"));