let arr=[1,2,2,3,3,4,4,4,5,6,7,6,6,6];
let count=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++
            break;
        }
    }
}
console.log("number of duplicate are"+count)