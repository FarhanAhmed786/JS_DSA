// Hello

// iterative approach

function reverseString(string){
    let reverse = ""
    let length = string.length - 1

    while(length >= 0){
        reverse = reverse + string[length]
        length--;
    }
    return reverse
}
//console.log(reverseString('farhan'));

function recursiveReverseString(string){
    console.log(`current string: ${string}`);
    console.log(`len: ${string.length}`);
    //base case
    if(string === "")
        return string
    return string[string.length - 1] + 
        recursiveReverseString(string.substring(0,string.length - 1))
}

// console.log(recursiveReverseString('Farhan'));

str = "hello"
console.log(str.length);
console.log(str.substring(0,str.length));
console.log(str.substring(0,str.length-1));


