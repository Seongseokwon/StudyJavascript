//함수와 수를 입력받아 수에 함수를 두번 적용한 결과를 리턴
function applyTwice(func, num) {
	return func(func(num));
}