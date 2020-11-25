function isIsogram(str) {
	str = str.toLowerCase();
	str = str.split('');
	let result = true;
	str.reduce((acc, cur) => {
		if(acc[cur]){
			result = false;
		}else{
			acc[cur] = 1;
		}
		return acc;
	},{})
	return result
}

/*
	나왔던 알파벳이 또 나오면 return false
	알파벳은 대,소문자가 구분되기 때문에 하나로 통일 시켜주고 접근하기
*/

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false