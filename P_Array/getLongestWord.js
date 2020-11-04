function getLongestWord(str) {
	let word = [];
	word = str.split(' ');
	let maxword = '';
	let maxlen = 0;
	for (let i = 0 ; i < word.length; i++){
		if(word[i].length > maxlen){
			maxword = word[i];
			maxlen =word[i].length;
		}else if(word[i].length === maxlen){
			maxword = maxword;
			maxlen = maxlen;
		}
	}
	return maxword;
}

//가장 긴문자를 저장하는 변수와 길이값을 바교하기 위한 변수를 선언해줍니다.
//반복문을 돌면서 길이가 긴 값이 나오면 문자열과 길이를 같이 저장해줍니다.
//else if를 통해서 다음 길이와 이전길이가 같다면 변화가 없도록 만들어 줍니다.