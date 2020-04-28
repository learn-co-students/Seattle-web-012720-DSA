// david
function firstDigit(word) {
    // let digits = [];
    // let newWord = word.split("") 
    // newWord.map(x=>{
    //     for (let i=1; i<11; i++) {
    //         if (`${x}`==`${i}`) { digits.push(`${i}`)}}    }  ) return digits[0]} firstDigit("var_1__3Int");

}

// joe
function findLeftmost(string){
    let split = string.split("");
    const numbers = ["0", "1", "2","3","4","5","6","7","8","9","0"];
    for (let i=0;i<split.length;i++){
      if (numbers.includes(split[i])){
        return split[i];
      };
    };
};

function findLeftmost(string){
    for (let i=0;i<string.length;i++){
      if (parseInt(string[i])){return string[i]}
    };
};

// zeb && clarion

function findLeftmost(word){ 
    return word.match(/[0-9]/) ? word.match(/[0-9]/)[0] : null
}

function digitTaker (str) {
    return str.match(/[0-9]/)[0]
} 

// chris

function findLeftmost(string) {
    let newArray = []
    string.split('').map(x => {
      if (x < 10) {
        newArray.push(x)
      }
    })
    return newArray[0]
  }

//   kailana

function findLeftmost(string){
    numbers = []
    for(let i=0; i<string.length; i++){
      if(parseInt(string.charAt(i))){
        numbers.push(string.charAt(i))
      } else {
       console.log("no numbers")
      }
    }
    return numbers.shift()
}
