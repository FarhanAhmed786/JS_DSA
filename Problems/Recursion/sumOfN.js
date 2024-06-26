function sumOfNNum(num){

    if(num == 1)
        return 1

    return sumOfNNum(num - 1) + num
}
console.log(sumOfNNum(10));