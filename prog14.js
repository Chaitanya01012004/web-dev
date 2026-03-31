let arr=[10,15,23,27,40]
let largest=-Infinity
let secondlargest=-Infinity
for(i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondlargest=largest
        largest=arr[i]
    }
    else if(arr[i]>secondlargest && arr[i]!=largest){
        secondlargest=arr[i]
    }
}
console.log("Largest:", largest)
console.log("Second Largest:", secondlargest)