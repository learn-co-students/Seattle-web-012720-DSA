// jack

const imABirdScientistDoingBirdScience = (birds) => {
    let birdCounts = {};
    for (let i = 0; i < birds.length; i++) {
      if (birdCounts[birds[i]]) {
        birdCounts[birds[i]] += 1;
      } else {
        birdCounts[birds[i]] = 1;
      }
    }
    let birdOptions = Object.keys(birdCounts)
    let maxValue = 0;
    let maxKeys = [];
    for (let i = 0; i < birdOptions.length; i++) {
      if (birdCounts[birdOptions[i]] >= maxValue) {
        maxValue = birdCounts[birdOptions[i]];
        maxKeys.push(birdOptions[i]);
      }
    }
    let minIndex;
    for (let i = 0; i < maxKeys.length; i++) {
      if (i === 0) {
        minIndex = birds.indexOf(parseInt(maxKeys[i]))
      }
      if (minIndex > birds.indexOf(parseInt(maxKeys[i]))) {
        minIndex = birds.indexOf(parseInt(maxKeys[i]))
      }
    }
    console.log(birds[minIndex])
  }

// joe

function arrayCounter(array) {
    let hashy = {};
    let maxCount = 0
    let current;
    for (i=0;i<array.length;i++) {
      if (!hashy[array[i]]) {
        hashy[array[i]] = 1
      } else {
        hashy[array[i]]++
        if (hashy[array[i]] > maxCount ) {
          maxCount = hashy[array[i]]
          current = array[i]
        }
      }
    }
    if (!current) {
      return array[0]
    } else {
      return current
    }
  };

//   clarion

function birdScientist(birds){
    birdCount = {}
    for (let i=0; i<birds.length; i++){
      if (!birdCount[birds[i]]){
        birdCount[birds[i]] = 1
      } else {
        birdCount[birds[i]] +=1
      }
    }
    let max = []
    for (const bird in birdCount) {
      birdCount[bird] == Math.max(...Object.values(birdCount)) ? max.push(bird) : null
    }
    let j=0; 
    while (j<birds.length) {
      if (max.includes(birds[j].toString())){
        return birds[j]
      } else 
      birds.shift()
      j++
    }
  }

//   diana

function imABirdScientistDoingBirdScience(arr) {
    let hash = {};
    let birdIds = [];
    for (let i=0; i < arr.length; i++) {
      if (hash[arr[i]]) {
        hash[arr[i]][0] +=1;
      } else {
        hash[arr[i]] = [1, i]
        birdIds.push(arr[i])
      }
    }
    console.log(hash)
    //start with references to the first bird in the hash
   let keyBird = birdIds[0];
   let maxNumOfBirds = hash[keyBird][0];
   let minIndex = hash[keyBird][1];
   for (let i=0; i < birdIds.length; i++) {
     if (hash[birdIds[i]][0] > maxNumOfBirds) {
        keyBird = birdIds[i]
        maxNumOfBirds = hash[keyBird][0]
        minIndex = hash[keyBird][1]
     } else if (hash[birdIds[i]][0] === maxNumOfBirds) {
       if (hash[birdIds[i]][1] < minIndex) {
        keyBird = birdIds[i]
        maxNumOfBirds = hash[keyBird][0]
        minIndex = hash[keyBird][1]
       }
     }
   }
   return keyBird;
  }