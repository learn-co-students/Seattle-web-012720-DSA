// Clarion's solution

function rotate_left(array, rotations) {
    let mapping = [];
    let x = array.length;
    numRotations = rotations%x;
    for (let i=0; i<x; i++) {
      let actual = i-numRotations;
      if (actual < 0) {
        actual = x+actual;
      }
      mapping[actual] = array[i];
    }
    return mapping
}

// or, we can use shift/push:

function rotate_left(array, rotations) {
    let x = array.length;
    numRotations = rotations%x;
    for (let i=0; i<numRotations; i++) {
      temp = array.shift()
      array.push(temp)
      }
      return array
}