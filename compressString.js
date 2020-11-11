function compressString(str) {	
	let count = 1;
	let incr = 0;
	let resstr = '';
	// 지금문자 전문자 같은지 다른지
	for(let i = 0; i < str.length; i+= incr){
		console.log("i value : " + i);
		console.log("incr : " + incr);
		for(let j = i+1; j < str.length; j++){
			if(str[i] === str[j]){
				if(j === str.length-1){
					count++;
					if(count >= 3){
						resstr +=  `${count}${str[j]}`
						i = str.length;
						break;
					}else{
						for(let k = 0; k < count; k++){
							resstr += `${str[i]}`
						}
						i = str.length;
						break;
					}
				}
				count++;
				console.log('count  : ' +count);
			}else{
				if(j === str.length -1){
					resstr += `${str[i]}${str[j]}`;
					break;
				}
				if(count >= 3){
					resstr += `${count}${str[i]}`
					console.log('count >= 3 : ' + resstr);
				}else{
					for(let k = 0; k < count; k++){
						resstr += `${str[i]}`
					}
					console.log('else count : ' + resstr);
				}
				incr = count;
				count = 1;
				console.log('reset : '+ count);
				break;
			}
		}
	}
	console.log(resstr);
}

let output = compressString('EQTWVOQQQVDVRC');
// console.log(output); // --> 3wggoppo4p