// chris

function chrisGram(string) {
    let array = string.split("")
    let newArray = []
    while (array.length > 0) {
      j = Math.floor(array.length * Math.random())
      newArray.push(array.splice(j,1))
    }
    return newArray.join("")
  }

// jack

function jackGram(string) {
    let returnString = '';
    while(string.length > 0) {
      const randomNum = Math.floor(Math.random() * string.length);
      returnString = returnString.concat(string[randomNum]);
      let beginning = string.slice(0, randomNum);
      let end = string.slice(randomNum + 1, string.length);
      string = beginning + end;
    }
    return returnString;
  }

//   Zeb

function lazyGram(string) {
    x = Math.floor(2*Math.random())
    return string[x].concat(string.slice(0,x)).concat(string.slice(x+1,string.length))
}