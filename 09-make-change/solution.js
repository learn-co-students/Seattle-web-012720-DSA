// aidan's solution:

function makeChange(value){
    const quarter = 0.25
    const dime = 0.10
    const nickel = 0.05
    const penny = 0.01
    const changeHash = {
        quarter: 0,
        dime: 0,
        nickel: 0,
        penny: 0
    }
    while(value > 0){
        if(value - quarter > 0){
        value-= quarter
        changeHash.quarter += 1
        }else if(value - dime > 0) {
        value-= dime
        changeHash.dime+= 1
        }
        else if(value - nickel > 0) {
        value-= nickel
        changeHash.nickel+= 1
        }
        else {
        value -= penny
        changeHash.penny +=1
        }
    }
    return changeHash
}

//   zeb's modulo addition: 
function zebChange(number){
    number = number * 100    
    let quarters = parseInt(number/25)    
    let change = number % 25    
    let dimes = parseInt(change/10)    
    change = change % 10    
    let nickels = parseInt(change/5)    
    change = change % 5
    change = change.toFixed(2)
    const changeHash = {
    quarters,
    dimes,
    nickels,
    change
    }
    return changeHash
}
console.time("zeb")
for(let i=0;i<10000;i++){
    zebChange(0.95)
}
console.timeEnd("zeb")

console.time("aidan")
for(let i=0;i<10000;i++){
    makeChange(0.95)
}
console.timeEnd("aidan")
