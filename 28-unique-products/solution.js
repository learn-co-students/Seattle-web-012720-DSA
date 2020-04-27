// Joe's
function joeUniqueProducts(arr){
    let products= [];
    let total=[];
    for (i=0;i<arr.length;i++){
      products = arr[i].toString().split("");
      total.push(parseInt(products.reduce((a,b)=>a*b)));
      hash = {};
      total.forEach(value=>{
        if (!hash[value]) {
          hash[value] = 1
        }
      })
    }
    return Object.keys(hash).length;
  };

// Clarion's
function clarionUniqueProducts(arr){
  let products= []
  for (let i=0; i<arr.length; i++){
    let x = arr[i]
    let product = 1
    while (x > 10){
      let digit = x%10
      product *= digit
      x = Math.floor(x/10)
    }
    product *= x
    products.push(product)
  }
  return new Set(products).size
}


console.log(clarionUniqueProducts([2,24,12]))

// Jack's
function jackUniqueProducts(array) {
    let products = {};
    for(let i = 0; i < array.length; i++) {
      let product = 1;
      while(array[i] !== 0) {
        product *= array[i] % 10;
        if(array[i] < 10) {
          array[i] = 0
        } else {
          array[i] = Math.floor(array[i] / 10);
        }
      }
      products[product] = 0; 
    }
    return Object.keys(products).length;
  }