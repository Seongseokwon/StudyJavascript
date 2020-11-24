function countAllCharacters(str) {
	str = str.split('');
	let counts = str.reduce((acc, cur) => {
		if(acc[cur]){
			acc[cur]++;
		}else{
			acc[cur] = 1;
		}
		return acc;
	}, {})
	return counts;
}

let output = countAllCharacters('banana');
console.log(output)