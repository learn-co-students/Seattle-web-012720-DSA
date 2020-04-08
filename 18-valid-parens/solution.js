// group discussion


function validParens(str){
    let stack = []

    const opens = {
        "{":"}",
        "(":")",
        "[":"]"
    }

    const closeds = {
        "}": true,
        ")": true,
        "]": true,
    }

    for(let i=0; i<str.length; i++){
        if(opens[str[i]]){
            stack.push(str[i])
        }
        if(closeds[str[i]]){
            if(opens[stack.pop()] !== str[i]){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(validParens("{([{[{()}]}])}"))
console.log(validParens("()[}{}]"))

function lief(str){
    str = str.split("")
    while(str) { 
        let front = str.shift(); 
        let back=str.pop();
        if (front !== back) { return false} 
    } 
    return true
    // except use ascii dictionary and move these things around a little
}

console.log(lief("{([{[{()}]}])}"))
console.log(lief("()[}{}]"))