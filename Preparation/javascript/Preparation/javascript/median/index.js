let numb1 = [1,3,9];
      let numb2 = [2,4,8,9];
    
      let arr = numb1.concat(numb2);

      arr.sort(function(a, b){return a - b});

      console.log(arr);
      

      let median;
      //odd length
      if(arr.length % 2 !==0 ){
        let middelIndex = Math.floor(arr.length/2)
        median = arr[middelIndex]
      }
      else{
        let middelIndex = Math.floor(arr.length/2)
        median = (arr[middelIndex] + arr[middelIndex-1])/2 
      }
      console.log(median);
      