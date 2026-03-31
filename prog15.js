let num=123
copy=num
sum=0
digit=0
 function factorial (n){
    fact=1
    for(i=0;i<n;i++){
        fact *=i
    }
    return fact
 }
 while(num>0){
    digit=num%10
    sum=sum+factorial(digit)
    num=Math.floor(num/10)
 }
 if(sum==copy){
    console.log(copy+"is a strong number")
 }else{
    console.log(copy+"is not a strong number")
 }