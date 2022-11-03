var arr = [7,5,4,3,3,2,7,4];

function removeDuplicates(arr) {
var unique = [];
for(i=0; i < arr.length; i++){ 
    if(unique.indexOf(arr[i]) === -1) { 
        unique.push(arr[i]); 
    } 
}
return unique;
}

console.log(removeDuplicates(arr));