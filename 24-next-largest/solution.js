//  Diana, O(n^2)

function nextGreatest(array) {
    let obj = {};
    for (let i=0; i < array.length; i++) {
      obj[array[i]] = array.slice(i+1).find(num => {
        return num > array[i]
      }) ? array.slice(i+1).find(num => {
        return num > array[i]
      }) : -1
    }
    return obj;
}

// a solution with O(n) runtime

function greater(arr) {

    let i = 0
    let j = 0
    let pointer = arr[i]
    let current = arr[i+1]
    while(i !== arr.length){
  
      if (pointer < current){
        console.log( `${pointer} --> ${current}`)
        i++
        j = i+1
        pointer = arr[i]
        current = arr[j]
      
    } else if(j == arr.length){
       console.log( `${pointer} --> -1`)
        current = pointer
        i++
        j = i+1
        pointer = arr[i]
        current = arr[j]
  
      }
      else {
        j++
        current = arr[j]
      }
    }
}