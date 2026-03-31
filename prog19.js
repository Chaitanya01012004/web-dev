var num=121
var copy=num
var sum=0
var digit=0
while(num!=0){
    num=parseInt(num/10)
    digit++
}
num=copy
while(num!=0){
    rem=num%10
    sum+=rem**digit
    num=parseInt(num/10)
}
console.log(sum==copy ? "armstrong number":"not an armstrong number")