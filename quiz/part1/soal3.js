function cariMedian(arr) {
    // you can only write your code here!
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]){
            arr.splice(i, 2, arr[i + 1], arr[i]);
        }
    }

    let median = 0;

    if(arr.length % 2 === 0) {
        let midNum1 = arr[(arr.length / 2) - 1];
        let midNum2 = arr[(arr.length / 2)];
        median = (midNum1 + midNum2) / 2;
    } else {
        median = arr[Math.floor(arr.length / 2)];
    }

    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3 
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5