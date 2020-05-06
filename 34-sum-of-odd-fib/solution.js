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

// diana

function sumOddFibs(n) {
    let x = 1;
    let y = 1;
    let next = 2;
    let sum = 2;
    while (next <= n) {
      if (next%2 !== 0) {
        sum += next;
      }
      x = y;
      y = next;
      next = x + y;
    } 
    return sum
}

// jack

const fib = (digits) => {
    let older = 1;
    let old = 1;
    let current;
    let output = [older, old];
    for(let i = 0; i < digits - 2; i++) {
      current = older + old;
      output.push(current);
      older = old;
      old = current;
    }
    return output;
  }
  const sumOddFibs= (int) => {
    let sum = 0;
    seq = fib(int / 2);
    for(let i = 0; i < seq.length; i++) {
      if(seq[i] % 2 === 1) {
        sum += seq[i];
      }
      if(sum >= int) {
        return sum;
      }
    }
}