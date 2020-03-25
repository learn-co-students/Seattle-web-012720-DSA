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
let newArray = [1,5,9,2,15,10]
let newTarget = 12
function zebAdd(array, target) {
    array = array.sort(function(a,b) {return a-b})
    console.log(array, target)
    function zebAddNoSort (array, target) {sum = array[0] + array[array.length - 1]
    console.log(sum)
    if (sum === target) {
        let answerArray = [array[0], array[array.length - 1]]
        console.log(answerArray, "oaijsdf")
        return "aoisdjf"
        // ("this be the answers: " + answerArray)
        // return [array[0], array[array.length - 1]]
    }
    if (sum < target) {
            array = array.slice(1)
            zebAddNoSort(array,target)
        } 
    else {
            array = array.slice(0, array.length - 1)
            zebAddNoSort(array, target)
        }
    }
    zebAddNoSort(array, target)
}
console.log(zebAdd(newArray, newTarget))
// console.log(answerArray)


console.log(checkTarget([1,2,3,4,5,6], 8))