function getArrayOfNumbers(number) {
	let result = []
	for (let i = 1; i <= number; i += 1) {
		if (i % 10 === 0) continue
		if (i < 10) {
			result.push(i)
		} else {
			let n = Math.trunc(i / 10)
			let remainder = i % 10

			result.push(n, remainder)
		}
	}

	return result
}
export default getArrayOfNumbers
