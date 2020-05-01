// Jonny
const timeConverter = (time) => {
    if (time.includes('P')){
      let splitTime = time.split("P")
      let denominations = splitTime[0].split(':')
      denominations[0] = (parseInt(denominations[0]) + 12).toString()
      denominations = denominations.join(':')
      console.log(denominations)
    }
    if (time.includes('A')){
      let splitAMTime = time.split("A")
      let denominations = splitAMTime[0].split(':')
      if (denominations[0] === '12'){
        denominations[0] = '00'
        denominations = denominations.join(':')
        console.log(denominations)  
      } else {
      console.log(splitAMTime[0])
      }
    }
  }

// Clarion's same logic but plus ternary

function timeConverter(time){
    let splitTime = time.split(':')
    time.includes("P") ? splitTime[0]=(parseInt(splitTime[0])+12).toString() : splitTime[0] == '12' ? splitTime[0] = "00" : null
    let mil = splitTime.join(':').slice(0, 8)
    return mil
}