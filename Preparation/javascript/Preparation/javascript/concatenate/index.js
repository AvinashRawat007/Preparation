let arr1 = [];

let arr = [7,6,5,4,9,2];
for(i=0 ; i<arr.length ; i++){
 arr1[i]= arr[i];
 arr1[i+arr.length] = arr[i];
}

console.log(arr1);