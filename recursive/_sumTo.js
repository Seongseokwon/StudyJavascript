//수를 입력받아서 1부터 num까지의 합을 리턴
// 입력받은 숫자는 0 이상이다.
function _sumTo(num) {
  if(num < 0 )
    return ;
  if(num <= 1)
    return num;

  return num + _sumTo(num -1)
}

console.log(_sumTo(3))
/*
  1.1이하 일 때는 입력받은 숫자를 그대로 리턴한다.
  2.num을 1씩 줄여 주면서 함수를 다시 호출
  2 - 1. 다시 호출하다 num === 0 일때 그 값을 가지고 return
  2 - 2. 다시 값을 넣어주면서 계산이된다.


  Ex) num === 3
  1. return 3 + _sumTo(2) 3 + 3 => [6] 결과값 
  2. return 2 + _sumTo(1) 2 + 1 => 3
  3. return 1 + _sumTO(0) 1 + 0 => 1
  4._sumTo(0) === 0       
*/