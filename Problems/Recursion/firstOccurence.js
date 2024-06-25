// arr = [3,4,1,8,1,7];
// findMe = 1
// currIndex = 0
// output = 2
// if not fount me -1

// iterative
function firstOcc(arr,findMe,currIndex){
    while(currIndex<arr.length){
        if(arr[currIndex] == findMe)
            return currIndex
        currIndex++
    }
    return -1
}

function recurrsiveFirstOcc(arr,findMe,currIndex){

    if(arr.length === currIndex){
        return -1
    }
    if(arr[currIndex]===findMe){
        return currIndex
    }

    return recurrsiveFirstOcc(arr,findMe,currIndex+1)
}

// Usage
          // 0 1 2 3 4 5 6
let myArr = [2,3,4,5,7,6,6]
let currIndex = 0
findMe = 5
console.log(recurrsiveFirstOcc(myArr,findMe,currIndex));