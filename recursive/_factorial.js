//수를 입력받아 num!값을 구하시오
function _factorial(num) {
	if(num <= 1)
		return 1;
	return num * _factorial(num - 1)
}

/*문제를 구현하기 위해선 팩토리얼이 무엇인지 알아야 한다.
  팩토리얼 기호 : !
	Ex) 5! === 5 * 4 * 3 * 2 * 1
	입력 받은 수부터 1까지 줄어들면서 곱한 결과값
	1! 은 1이다.

	위의 코 드를 간단하게 전개해보기
	_factorial(3) :
	3 * _factorial(2) 3 * 2 => [6] : 결과값
	2 * _factorial(1) 2 * 1 => 2
	_factorial(1) === 1

	1일때까지 쭈우욱 타고 내려갔다가 그값을 가지고 올라오면서 계산해준다고 생각하면
	접근이 쉬울수도 있을것 같다.
*/
