function returnFunction() {
	return function(){
		return 'Hello Javascript';
	}
}

let output = returnFunction();
console.log(output());