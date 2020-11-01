function makeOddDigits(num) {
    let resNum = "";
    let i = 0;
    let oddNum = 1;
    while(i < num){
        resNum += String(oddNum); //1부터 쌓아주기 시작
        oddNum += 2; // 저장하고 다음 홀수를 저장하기 위해서 2증가
        i++;
    }
    return oddNum;
}
//위의 코드는 홀수를 담을 변수 num과 비교할 i 결과값 저장 resNum
//이렇게 3가지 변수 선언을 하고 시작을 하였습니다.
//변수를 줄일 수 있는 방법으로는 홀수 저장을 어떻게 해주면 좋을지 처리를
//해보면 좋을것 같습니다.

function makeOddDigits(num) {
    let resNum = "";
    let i = 1;
    while (i <= num){
        resNum += String(i*2-1);
        i++;
    }
    return resNum;
}
//i는 항상 1씩 증가한다는 가정하에 i값에 2를 곱하고 1을 뺀값은 
//홀수라고 생각을 해볼수도 있을것 같습니다.