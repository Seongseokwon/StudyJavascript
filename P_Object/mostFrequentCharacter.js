function countChar(str){
	str = str.split('');
	let lonarr = ['',0];
	let counts = str.reduce((acc, cur) => {
		if(acc[cur]){
			acc[cur]++;
		}else{
			acc[cur] = 1;
		}
		for(let i = 0 ; i < lonarr.length; i++){
			if(cur !== ''){
				if(acc[cur] > lonarr[1]){
					lonarr[0] = cur;
					lonarr[1] = acc[cur];
				}
			}
		}
		return acc
	}, {})
	return (lonarr);
	
}
function mostFrequentCharacter(str) {
	let resarr = countChar(str);
	return resarr[0];
}

let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'