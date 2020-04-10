// Lief
// it was initially solved with a for loop and a filter for On^2. The two following solutions are O2n (On)


function reduceArray(array1, array2) {
    let hash = {};
    output = []
    for (let i=0; i<array2.length; i++) {
        hash[array2[i]] = 1;
        }
    for (i=0; i<array1.length; i++) {
      if (hash[array1[i]]) {
        continue
      } else {
        output.push(array1[i])
      }
    }
    return output
}

test = [1, 2, 3, 4, 5];
filter = [2, 3]

reduceArray(test, filter)

// Clarion

function reduceArray(arr1, arr2){
    let hash = {}
    arr2.forEach(x => {
      hash[x]=true
    })
      let output = arr1.filter(x => !hash[x])
    console.log(output)
}