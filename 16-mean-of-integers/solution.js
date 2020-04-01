// david



function mean(num) {
	let leng = 0
	let total = 0


	while(num>10){
		total += num%10
        num = Math.floor(num/10)
        leng += 1
	}


    total += num
    leng += 1
	return Math.floor(total/leng)
}
function numAverager(integer) {
    let x = 1
    let z = 0
    while (x < integer) {
        x = x*10
        z++
    }
    x = x/10
    let sum = 0
    while (x > 1) {
        let y = Math.round(Math.floor(integer/x))
        sum += y
        integer = integer - y*x
        x = x/10
    }
    sum += integer
    return sum/z
}

function averager(integer) {
	//split
	let total = 0;
	//then add them all together using +
	//then divide by the length of the array
	//return integer
	const array = integer.toString().split("")
	const arr = array.join("+")
	return eval(arr)/array.length
}

function firstOne(num){
	let total = 0
	const arr = num.toString().split("")
	for(let i=0; i<arr.length; i++){
		total+=(parseInt(arr[i]))
	}
	return total/arr.length
}

let i=0
console.time("hal")
while (i<100){
	mean(12345)
	i++
}
console.timeEnd("hal")

console.time("zeb")
i=0
while (i<100){
	numAverager(12345)
	i++
}
console.timeEnd("zeb")

console.time("david")
i=0
while (i<100){
	averager(12345)
	i++
}
console.timeEnd("david")

console.time("d2")
i=0
while (i<100){
	firstOne(12345)
	i++
}
console.timeEnd("d2")
