// kailana


function missingNo(nums){
    let total = 0
    nums.forEach(x=>{
        total += x
    })
    return 55-total
}


console.log(missingNo([1, 2, 3, 4, 6, 7, 8, 9, 10]))