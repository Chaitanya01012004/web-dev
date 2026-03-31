let arr=[1,2,3,4,5]
let min=arr[0]
let max=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max) {
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
let difference=max-min
console.log("biggest number is"+max)
console.log("smallest number is"+min)
console.log("difference is"+difference)