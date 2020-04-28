// Aidan
function aidanNth(arr, int){
    let arr2 = []

    for(let i=0; i< arr.length; i++){
        if(i%int != 0){
            arr2.push(arr[i])
        }
    }

    return arr2
}

// Jack

function jackNth(array, int) {
    for (let i = int - 1; i < array.length; i += int - 1) {
      array.splice(i, 1);
    }
    return array;
  }
