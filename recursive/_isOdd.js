//수를 입력받아 홀수 인지 여부를 리턴하시오
function _isOdd(num) {
	num = Math.abs(num);

	if(num === 0){
		return false;
	}
	if(num === 1){
		return true;
	}
	return _isOdd(num - 2);
}


console.log(_isOdd(-17));

/*
	1. 입력 받은 수에서 2를 반복적으로 뺏을때 1이 남으면 홀수
	2. return에 입력받은 숫자에서 2를 빼주면서 return
	3. 그 결과 0, 1로 줄여졌을 때 1이면 true return후 종료

	-1. 처음에 Math.abs를 해준이유는 음수에대한 처리도 가능하게 하려고
	- Math.abs 대신 입력받은수에 -1을 곱한값을 넣어주는 방법도 가능 
 */