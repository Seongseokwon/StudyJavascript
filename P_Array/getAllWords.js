function getAllWords(str) {
	let word = [];
	if (str === '')
		return word;
	word = str.split(' ');
	return word;
}