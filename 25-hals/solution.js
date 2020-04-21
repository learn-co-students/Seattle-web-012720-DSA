// Hal's

function uniqueSort(arr) {
    let hashy = {}
    let arr3 = []
    arr.forEach((x, i)=>{
      if(hashy[x]) { return }
      hashy[x] = 1
      arr3.push(x)
    })
    return arr3.sort((a,b)=> a-b)
  // returns sorted, unique array
  }
  
  
  uniqueSort([13,100,27,2,1,1,1])
  uniqueSort([13,100,27,2,1,1,1])
  uniqueSort([13,100,27,2,1,1,1])
  uniqueSort([13,100,100,100,27,2,1,1,1])
  
  
//potentially i make a set and hand it the array, and the set will delete dupes
// let newb = new Set(arr)