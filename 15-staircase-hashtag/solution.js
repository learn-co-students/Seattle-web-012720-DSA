// jonny

function staircase(n) {
    for(let i=0; i<n+1; i++){
        let str = ''
        for(let j=i; j<n; j++){
            str += ' '
        }
        for(let j=0;j<i;j++){
            str += '#'
        }
        console.log(str)
    }
}

// chris's internet cheat code solution

function staircase(num) {
    for (let i=1; i <= num; i++) {
      let spaces = num - i
      console.log(" ".repeat(spaces) + "#".repeat(i))
    }
  }
  staircase(4)


// clarion's Array.fill surprise

function staircase(n){
    for (i=1; i<=n; i++){
      let spaces = Array(n-i).fill(' ');
      let hashtags = Array(i).fill("#");
      let line = spaces.concat(hashtags).join('');
      console.log(line);
    }
  }