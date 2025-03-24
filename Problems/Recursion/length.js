function recurLen(string){
    if(string == "")
        return 0

    return 1 + recurLen(string.substring(1))
}
console.log(recurLen("farhan"))