// Jazz

testArray = [2,5,6,3,-7,8,10,-6]
function adjacentProduct(array) {
  let x=0
  let y=0
  let p=0
  for(let i=0;i<array.length-1;i++) {
    x=array[i];
    y=array[i+1]
    if (x*y>p) {
      p= x*y;
    };
  };
  return p;
};
adjacentProduct(testArray);