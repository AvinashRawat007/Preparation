let count = 0;

let arr = [1,2,3,4];
for(i=0 ; i<arr.length ; i++){
    count += arr[i];
    arr[i] = count;
}
console.log(arr);