// david



function mean(num) {
	let leng = num.toString().length
	let total = 0
	while(num>10){
		total += num%10
		num = Math.floor(num/10)
	}
    total += num
	return total/leng
}