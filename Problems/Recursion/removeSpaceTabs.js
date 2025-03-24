function removeTAS(string){
    let result = ""
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if(char != " "&& char != "\t"){
            result += char
        }
    }
    return result;
}
// console.log(removeTAS("farhan    ahmed r"))

function removeRTAS(string){
    if(string.length === 0)
        return ""

    const firstChar = string[0];
    const restOfString = string.slice(1)

    if(firstChar === " " || firstChar === "\t")
        return removeRTAS(restOfString)

    return firstChar + removeRTAS(restOfString)
}
console.log(removeRTAS("Hello Wrold"));
