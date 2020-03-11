// Diana
function checkPalidrome(str) {
    str.replace(/\s/g, '');
    let length = str.length;
    let count = parseInt(length/2);
    for (let i=0; i < count; i++) {
      if (str[i] !== str[length - (i+1)]) {
        return false;
      }
      return true;
    }
    //true/false
  }