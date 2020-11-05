let word;

word = returnWordWithJoy('Hello World');
console.log(word) // Hello World!
function returnWordWithJoy(word){
	if(typeof word !== 'string')
		return 'wrong type'
	else
		return word + "!";
}

//위와 같을때 함수를 불러서 word의 결과 값을 돌려받으시오