// kim's
function kimSplitter(arr, n) {
    let loopnum = Math.ceil(arr.length/n)
    let outerArray = [];
    for (let i=0; i < loopnum; i++) {
      outerArray.push(arr.slice(i*n, n + (i*n)))
    }
    return outerArray
}

// jonny's, still a little broken
function jonnySplitter(array, num){
    let result = []
    for (let i = 0; i < array.length; i+=num){
      let subArray = []
      for (let j = i; j < num; j++){
        subArray.push(array[j])
      }
      result.push(subArray)
    }
    return result
}

// diana's
function dianaSplitter(arr, n) {
    let outerArray = [];
    for (let i=0; i < arr.length; i += n) {
      outerArray.push(arr.slice(i, n+i))
    }
    return outerArray
}

// zeb's

function zebSplitter(arr, n) {
    let k = 0
    let result = []
    let outerArray = []
    while (k < arr.length) {
      for (let i=0; i < n; i++) {
          result.push(arr[i])
      }
      arr = arr.slice(n)
      outerArray.push(result)
      result = []
      k++
  }
  return outerArray
}

// clarion's
function clarionSplitter(array, num){
    let x = Math.floor(array.length/num)
    let results = Array(x).fill([])  
    for (let i=0; i < results.length; i ++) {
        results[i]=array.splice(0, num)
      }
    return results
}

function aidanSplitter(array, num){
    let newArray = []
    let otherArray = []
    while(array.length !== 0){
        for(let i = 0; i<num; i++){
            if(array[0] == undefined){
                break
            }
            otherArray.push(array[0])
            array.shift()
        }
        newArray.push(otherArray)
        otherArray = []
    }
    return newArray
}

let i=0
console.time("kim")
while(i<100){
    kimSplitter(["a", "b", "c", "d"], 2)
    i++
}
console.timeEnd("kim")

i=0
console.time("diana")
while(i<100){
    dianaSplitter(["a", "b", "c", "d"], 2)
    i++
}
console.timeEnd("diana")

i=0
console.time("zeb")
while(i<100){
    zebSplitter(["a", "b", "c", "d"], 2)
    i++
}
console.timeEnd("zeb")

i=0
console.time("clarion")
while(i<100){
    clarionSplitter(["a", "b", "c", "d"], 2)
    i++
}
console.timeEnd("clarion")

i=0
console.time("aidan")
while(i<100){
    aidanSplitter(["a", "b", "c", "d"], 2)
    i++
}
console.timeEnd("aidan")