function calculateScore(records, value) {
  // TODO: Your code here!
  let matcharr = records.filter(function(el){
    return el.animal === value
	});
	console.log(matcharr)
	let result = 0;
	matcharr.forEach(function(el){
		result += el.score;
	})
	console.log(result)
	// let result = 0;
  // matcharr.forEach(function(el){
  //   result = el['score'].reduce(function(a, b){
  //     return a + b
  //   })
  // })
  // return result;
}


const records = [
  {
    score: 63,
    animal: 'dog',
  },
  {
    score: 75,
    animal: 'dog',
  },
  {
    score: 87,
    animal: 'cat',
  },
  {
    score: 98,
    animal: 'cat',
  },
  {
    score: 24,
    animal: 'dog',
  },
];

let output = calculateScore(records, 'cat');
console.log(output); // --> 185