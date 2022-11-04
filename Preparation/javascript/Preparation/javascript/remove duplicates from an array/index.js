var arr = [7,5,4,3,3,2,7,4,5];

function removeDuplicates(arr) {
var arr1 = [];
for(i=0; i < arr.length; i++){ 
    if(arr1.indexOf(arr[i]) === -1) { 
        arr1.push(arr[i]); 
    } 
}
return arr1;
}

console.log(removeDuplicates(arr));