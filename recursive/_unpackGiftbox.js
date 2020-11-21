function _unpackGiftbox(giftBox, wish) {
	giftBox.forEach((el) => {
		if(Array.isArray(el)){
			let res = _unpackGiftbox(el, wish);
			if (res === true){
				return true;
			}
		}
		if(el === wish){
			return true;
		}
	})
	return false;
}

function _unpackGiftbox(giftBox, wish) {
	for(let i = 0 ; i < giftBox.length; i++){
			if(giftBox[i] === wish)
					return true;
			if(Array.isArray(giftBox[i])){
				let res = _unpackGiftbox(giftBox[i], wish)
				if(res === true)
						return true;
			}
    }
	return false;
}



const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];
let output = _unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true

//reducer를 이용한 풀이 방법
// function _unpackGiftbox(box, gift) {
// 	let result = box.reduce((bg, ng) => {
// 		if(ng === gift){
// 			return true;
// 		}else if(Array.isArray(ng)){
// 			return _unpackGiftbox(ng, gift) || bg;
// 		}else{
// 			return bg;
// 		}
// 	}, false)
// 	return result
// }