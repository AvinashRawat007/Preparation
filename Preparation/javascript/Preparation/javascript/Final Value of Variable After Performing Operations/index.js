X = 0;
let arr = ["X++","++X","--X","X--"];
for (i=0; i<arr.length ; i++){
   if (arr[i].charAt(1)=="+"){
      X++;
   } else {
      X--;
   }
}
console.log(X);