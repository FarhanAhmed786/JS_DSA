//find the gcd of two numbers
// ip 42 and 18
// op 6
// 42 divisiors are 1,2,3,6,7,14,21,42
// 18 divisiors are 1,2,3,6,18

function gcd(m,n){

    if(m === n)
        return m

    if(m>n){
       return gcd(m-n,n)
    }
    if(m<n){
        return gcd(n,n-m)
    }
}
console.log(gcd(48,18));