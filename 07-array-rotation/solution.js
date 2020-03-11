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

// here is lief's time stamped test runs with shift/push versus slice:

function arrayRotationShiftPush(array, numberOfRotations) {
  number = numberOfRotations%array.length;
  for (let i = 0; i < number; i++) {
      array.push(array.shift());
  }
  return array
}

function arrayRotationSplice(array, numberOfRotations) {
  index = numberOfRotations%array.length;

  return [...array.splice(index), ...array]
}

let array = []
let array2 = []
for (i = 0; i<20000; i++) {
  array[i] = i;
  array2[i] = i;
}

let time = Date.now();
const rotations = 1000;
const runs = 1;

for (i = 0; i < runs; i++) {
arrayRotationShiftPush(array, rotations);
}
console.log(Date.now() - time);


time = Date.now();

for (i = 0; i < runs; i++) {
arrayRotationSplice(array2, rotations);
}

console.log(Date.now() - time);
