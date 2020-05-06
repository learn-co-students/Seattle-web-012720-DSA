// clarion
function sumOddFibs(x){
    let sum = 0
    let fib = generateFibonacci(x)
    for (let i=0; i<fib.length; i++){
      if (fib[i]%2 == 1){
      sum += fib[i]
      }
    }
    return sum
  }
  //helper function
  function generateFibonacci(n){
    let seq = [1, 1]
    while (seq[seq.length -1] <= n){
      seq[seq.length] = seq[seq.length-1]+ seq[seq.length-2]
    }
   seq.pop()
   return seq
}


// zeb
// doesn't do the whole odds thing
function makeFibs (times, firstNum=1, secondNum=1, sum=0) {
    times -= 1
    sum += firstNum
    if (times > 1) {
        return makeFibs(times, firstNum+secondNum, firstNum, sum)
    }
    return sum + 1
}