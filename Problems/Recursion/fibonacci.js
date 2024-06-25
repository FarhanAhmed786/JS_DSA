//Fibonacci series

//iterative

function fibonacci(value){
    let n0 = 0
    let n1 = 1

    for(let i = 0;i<value;i++){
        let temp = n0 +n1

        n0 = n1
        n1 = temp
        
    }
    return n0
}
console.log(fibonacci(5));
console.log(fibonacci(6));

function recurrsiveFibonacci(value){

    if(value <= 1){
        return value
    }

    return (recurrsiveFibonacci(value - 1) + recurrsiveFibonacci(value - 2))
}
console.log(recurrsiveFibonacci(5));
console.log(recurrsiveFibonacci(6));