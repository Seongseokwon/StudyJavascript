let newObj  ={
	a : 1,
	b : 2
}

let newObj2 ={
	b: 4,
	c: 3
}


for(let key in newObj){
	console.log(key in newObj2)
}