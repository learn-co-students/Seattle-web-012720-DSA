// Clarion
function clarionRain(arr){
    let water = 0;
    let i = 0;
    if (arr[i] == 0){
      arr.shift()
    }
  let j = i + 2
  while (j<arr.length){
    if (arr[j] >= arr[i]){
      let width = j-i-1
      let height = arr[i]
      let area = width*height
      let k = i+1
      while (k<j){
        area -= arr[k]
        k++
      }
      water += area
      console.log("running total: " +water)
    i = j
    j = i + 2
    } else if (!arr[j+1]){
      i ++
      j = i + 2
    } else {
      j++
    }
    }
  console.log(water)
}
// Zeb

function zebRain1 (array) {
    let water = 0
    let tempWater = 0
    let highPoint = 0
    for (i = 1; i < array.length; i++) {
        if (array[i] < array[highPoint]) {
            tempWater = tempWater + (array[highPoint]-array[i])
        } else {
            water = water + tempWater
            highPoint = i
            tempWater = 0
        }
    }
    return water
    // this one has trouble accounting for the final droplet
}
landscape = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(puddles(landscape))


function zebRain2(array) {
    let prevHigh = 0
    let heights = []
    //find all the peaks going forward through array
    //will not find a peak less than the maximum peak
    //once it's found that maximum peak
    for (i=0; i< array.length; i++) {
        if (array[i] >= array[prevHigh]) {
            prevHigh = i
            heights.push(i)
        }
    }
    //so we start from the other side so that we get the peaks skipped before
    prevHigh = array.length - 1
    for (i=array.length -1 ; i >= 0; i--) {
        if (array[i] >= array[prevHigh]) {
            prevHigh = i
            heights.push(i)
        }
    }
    //remove duplicate peaks as they will mess up algo later
    hash = {}
    heights = heights.filter(function(index) {
        return hash.hasOwnProperty(index) ? false : (hash[index] = true)
    })
    //starting from the other side earlier put the peaks after the max
    //in the wrong order
    heights = heights.sort((a,b) => a-b)
    //count up all the water between peaks
    water = 0
    for (j=0; j < heights.length; j++) {
        for (k=heights[j]+1;k <heights[j+1];k++){
            if (array[heights[j]] > array[heights[j+1]]) {
                water += array[heights[j+1]] - array[k]
            } else {
                water += array[heights[j]] - array[k]
            }
        }
    }
    return water
}

// chris

function chrisRain(array) {
    let max = Math.max(...array)
    let waterBucket = []
    while (max !== -1) {
      let highpoint = array.filter(x => x === max)
      if (highpoint.length === 1) {
        let index = array.indexOf(max)
        array[index] = max - 1
      } else {
        let indexes = array.map((e, i) => e === max ? i : '').filter(String)
        for (i=0, j=1; j < indexes.length; i++, j++) {
          if (indexes[j] - indexes[i] !== 1){
            waterBucket.push((indexes[j] - indexes[i]) - 1)
          }
        }
        indexes.map(index => array[index]--)
      }
      max--
    }
    return waterBucket.reduce((a,b) => a+b)
  }