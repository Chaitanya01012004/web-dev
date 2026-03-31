let num=121
let reverse=0
let copy=num
let digit=0
while(num>0){
    digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)
}
if(reverse==copy){
    console.log(copy+"is a palindrome")
}else{
    console.log(copy+"is not a palindrome")
}