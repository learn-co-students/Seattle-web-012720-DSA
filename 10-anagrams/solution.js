// kim's

function anagramChecker(text1, text2){
    if(text1.length != text2.length){
        return false
    }
    for(let i=0; i<text2.length; i++){
        if(text1[i] != text2[text2.length-1-i]){
            return false
        }
    }
    return true
}

// really only works if for palindromes

// below is a solution which might work for anagrams

function aChecker(str, str2){
    if(str.length != str2.length){
        return false
    }
    str = str.split("")
    arr = str.sort()
    str2 = str2.split("")
    arr2 = str2.sort()

    let hashy1 = hashGenerator(arr)
    let hashy2 = hashGenerator(arr2)

    if(JSON.stringify(hashy1) == JSON.stringify(hashy2)){
        return true
    }
    return false
}

function hashGenerator(str){
    let hashy = {}
    str.forEach(x=>{
        if(hashy[x]){
            hashy[x] +=1
        }
        else {
            hashy[x] = 1
        }
    })
    return hashy
}

console.log(aChecker("qoqoqpqo", "totototo"))