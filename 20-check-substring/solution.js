// aidan
function subString(str, subStr){
    let stack = str.split('')
    let subString = subStr.split('')
    let word = []
    for(let i = 0; i < str.length; i++){
      if(subString[0] === stack[i]){
        word.push(subString.shift()) 
      } 
    }
    if(word.join('') == subStr){
      return true
    }else{
      return false
    }
  }


// hal's

function subs(s,t){
    let word = ''
    let tIndex = 0
    for(let i=0; i<s.length; i++){
        if(s[i] === t[tIndex]){
            word += s[i]
            tIndex++
        }
    }
    return word === t
}

// diana's

function checkSubstr(str, substr) {
    let j=0;
    for (let i=0; i < str.length; i++) {
      if (str[i] === substr.slice(j,j+1)) {
        j++;
      }
    }
    if (j === substr.length) {
      return true
    } else {
      return false
    }
  }

//   clarion's


function checkSubstr(long, short){
  let j=0
  while (j<long.length){
    if (long[j] = short[0]){
      short = short.slice(1)
      long = long.slice(j)
      j=0
    }
    j++
  }
  if (short.length != 0){
    return false
  } else {
    return true
  }
}

// chris
function checkSubstr(s, t) {
    let string = s.split("")
    let word = t.split("")
    for(let i=0; i <= string.length; i++) {
      if (string[i] === word[0]) {
        word.shift()
      }
    }
    if (word.length === 0) {
      return true
    } else {
      return false
    }
  }

//   zeb

function zebCodeString(code, string) {
    let count = 0
    for (i=0; i < code.length; i++) {
        if (string[count] === code[i]) {
            count++
            if (count === string.length) {
                return true
            }
        }
    }
        return false
}

function otherZebCodeString(code, string) {
    let codeCount = 0
    let infiniteLoopCheck = 0
    for (let stringCount = 0; stringCount < string.length; stringCount++) {
        while (string[stringCount] !== code[codeCount]) {
            codeCount++
            infiniteLoopCheck++
            if (infiniteLoopCheck > code.length) {
                return false
            }
        }
    }
    return true    
}

// kim

function checkSubstr(string,substring){
    arrFromSub = substring.split("")
    for (i =0; i < string.length; i++ ) {
      if (string[i] == arrFromSub[0]){
        arrFromSub.shift()
        if (arrFromSub.length === 0 ) {return true}
      }
    }
    return false
  }
