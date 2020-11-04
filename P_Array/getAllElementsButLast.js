function getAllElementsButLast(arr) {
	return arr.slice(0, -1);
}

//마지막 요소를 자르기 위해서 slice(0, -1)을 해줍니다.
//이때 배열이 만약 ['1','2','3'] 이라면 0에서 -1번째로 가면 3을 
//배열의 마지막 요소를 가리키는 용도이다 ! 