// count vowels in a string

function isVowel(character){
    let lowerChar = character.toLowerCase()
    let vowels = "aieou"

    if(vowels.indexOf(lowerChar) !== -1)
        return true
    else
        return false

}

function countVowels(string){
    let count = 0

    for(let i = 0;i<string.length;i++){
        if(isVowel(string[i])){
            count++
        }
    }
    return count

}
// console.log(countVowels("farhan"));

function recursiveCountVowels(string,stringLength){
    // console.log(`length : ${stringLength}`);
    if(stringLength == 1){
        return Number(isVowel(string[0]));
    }

    return recursiveCountVowels(string,stringLength - 1) + isVowel(string[stringLength - 1]);

}
let myString = "Hello";
// console.log(myString.length,myString);
console.log(recursiveCountVowels(myString,myString.length));