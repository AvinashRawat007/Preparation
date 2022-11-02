max_profit = 0;

let arr = [7,6,5,4,9,2];
for(i=0 ; i<arr.length-1 ; i++){
 for(j=i+1; j<arr.length; j++){
    let profit = arr[j]-arr[i];
    max_profit = Math.max(max_profit, profit);
 }
}
console.log(max_profit);