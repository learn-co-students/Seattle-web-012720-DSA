// matt
function grades(arr){
    finalArray = []
    for(let i=0;i<arr.length-1;i++){
        if (arr[i]< 38){
            finalArray.push(arr[i])
        }
        else {
            // split each element into an array of two elements each, so that we can check the final number
            // if the number should be rounded according to the rules, push it into the final array
        }
    }
    return finalArray
}

// clarion's modulo idea

function moduloGrades(arr){
    return arr.map(x=>{
        if(x<38){
            return x
        }
        else if(x%5 === 3 || x%5 === 4){
            return x+5-x%5
        }
        else return x
    })

}

console.log(moduloGrades([73, 67, 38, 33]))