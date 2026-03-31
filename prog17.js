let str="hello"
let count=0
let vowels="aeiouAEIOU"
for(let ch of str){
    if(vowels.includes(ch)){
        count++
    }
}
console.log("vowels count:", count)