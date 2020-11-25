function compressString(str) {	
	str = str.split('');
	str.push(" ");
	let res = [];
	str.reduce(function(acc, cur){
		if(acc[cur]){
			acc[cur]++;
		}else{
			if(acc){
				res.push(acc);
				acc = {};
			}
			acc[cur] =1;
		}
		return acc;
	},{})
	let strres = '';
	for(let i = 0 ; i < res.length; i++){
		for(let key in res[i]){
			if(res[i][key] >= 3){
				strres += `${res[i][key]}${key}`;
			}else{
				for(let j = 0; j < res[i][key]; j++){
					strres += key;
				}
			}
		}
	}
	console.log(strres);
}
let output = compressString('wwwggoppopppp');
// console.log(output); // --> 3wggoppo4p