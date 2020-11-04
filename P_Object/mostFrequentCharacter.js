function mostFrequentCharacter(str) {
	// TODO: 여기에 코드를 작성합니다.
	const charCount = {};
	let maxletter = "";
	let maxlen = 0;

	for(let i = 0; i < str.length; i++){
		if(str[i] !== ' '){
			if(charCount[str[i]] === undefined){
				charCount[str[i]] =1;
				if(charCount[str[i] > maxlen]){
					maxlen = charCount[str[i]];
					maxletter = str[i];
			}
			}else{
				charCount[str[i]]++;
				if(charCount[str[i]] > maxlen){
					maxlen = charCount[str[i]];
					maxletter = str[i];
				}
			}
		}
	}
	return maxletter;
}
