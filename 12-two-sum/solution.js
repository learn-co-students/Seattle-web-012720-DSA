// david

// given arr & target, find which two out of the array add up to the target
function checkTarget(arr, targ){
    let box = {}
  
    arr.forEach((x, index)=>{
      box[x] = index
    })
    // hash of numbers and their indexes
  
    for(let i =0; i<arr.length;i++){
      let currentDifference = targ - arr[i]
      if(box[currentDifference]){
        return [box[currentDifference], i]
      }
    }
  }
  //zeb suggests adding min and max and slowly slicing off the larger or smaller number depending on whether it was larger than the target originally
  
  console.log(checkTarget([1,2,3,4,5,6], 8))