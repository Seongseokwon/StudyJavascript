function isOdd(num){
    let strNum = String(num); // 입력받은 num을 String으로 변환
    let oddNum = strNum.slice(strNum.length -1);
    //slice를 통해서 문자열 넘이 가지고있는 가장 마지막 자리의 문자를 구합니다
    let i = 1;
    while (i < 10){
        if(Number(oddNUm) === i){
            return true;
        }else{
            i += 2;
        }
    }
    return false;
    //입력받은 숫자를 문자로 바꿔줘서 가장 마지막 문자를 가져오고
    //그문자를 다시 숫자로 바꿔줘서 10이하의 홀수랑만 비교하는 코드입니다.
}

function isOdd(num){
    if (num < 0)    //음수가 들어왔을때 양수로 바꿔주는 코드
        num = -num; //Math.abs(num)을 사용한 결과와 똑같다.
    while(num > 0){ 
        if (num === 1)
            return true;
        num = num - 2; 
    }
    return false;
    //입력 받은 숫자가 0보다 클때까지 2씩 빼주면서 그값이 1이 되면
    //홀수 아니면 짝수를 표현해주는 반복문 입니다.
}