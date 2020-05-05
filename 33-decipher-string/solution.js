// kim

const num_to_letter = {
    "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9,
    "K": 10, "L": 11, "M": 12, "N": 13, "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18,
    "T": 19, "U": 20, "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25
  }
  function kimDecoder(str){
    const arrFromStr = str.split(/[ -]+/)
    const result = []
    for (let i = 0; i < arrFromStr.length; i++){
      if (Object.keys(num_to_letter)[arrFromStr[i]]) {
        result.push(Object.keys(num_to_letter)[arrFromStr[i]])
      }
      else {
        result.push(num_to_letter[arrFromStr[i]]) 
      }
    }
    let findSpaceLocation = 0;
    for ( let f = 0; f< str.length; f++){
      if (str[f] === "-") { findSpaceLocation += 1 }
      else if (str[f] === " ") {
        findSpaceLocation += 1;
        result.splice(findSpaceLocation, 0, " ")
        findSpaceLocation += 1;
       }  
    }
    const result1 = result.join("");
    return result1
  }

//   zeb
function zebDecoder(string) {
    let referenceString = "abcdefghijklmnopqrstuvwxyz"
    let string_array = string.split(' ')
    string_array = string_array.map(block => block.split('-'))
    string_array = string_array.map((block) => {
        let smallString = ""
        for (let j=0; j<block.length;j++) {
            let text = referenceString[parseInt(block[j])-1]
            if (text === undefined) {
                textArray = block[j].split('')
                text = ""
                for (let k=0; k<textArray.length;k++) {
                    text += parseInt(textArray[k], 36) - 10
                }
            }
            smallString += text
        }
        return smallString
    })
    return string_array.join(' ')
}

// jack

const values = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26};
const jackDecoder = (string) => {
  sentence = string.split(' ').map((word) => {
    return word.split('-').map((char) => {
      if (parseInt(char)) {
        if (!!values[char]) {
          return values[char]
        } else {
          return Object.keys(values).find(key => {
            return values[key] === parseInt(char)
          });
        }
      } else {
        return char.split('').map((int) => {
          return values[int]
        }).join('');
      }
    }).join('');
  }).join(' ');
  return sentence;
}