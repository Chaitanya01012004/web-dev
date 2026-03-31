let string="madam"
let reverse=string.split("").reverse().join("")
if(string==reverse){
    console.log(string+"is a palindrome")
}else{
    console.log(string+"is not a palindrome")
}