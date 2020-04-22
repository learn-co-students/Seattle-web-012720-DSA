// Jonny
const largestOfFour = (arr) => {
    newArr = []
    //go through each array in arr
    for (let i = 0; i < arr.length; i++){
      let sortedArray = arr[i].sort((a,b) => a-b)
      newArr.push(sortedArray[sortedArray.length - 1])
    }
    console.log(newArr)
  }

// Jack

function largestOfFour(array) {
    let returnArray = [];
    for(let i = 0; i < array.length; i++) { 
      let max = 0;
      for(let j = 0; j < array[i].length; j++) {
        if(array[i][j] > max) {
          max = array[i][j];
        }
      }
      returnArray.push(max)
    }
    return returnArray;
  }

//   Chris

function largestOfFour(bigArray) {
    let newArray = []
    bigArray.forEach(smallArray => {
      newArray.push(
        smallArray.sort((a,b) => a-b).pop()
      )
    })
    return newArray
  }