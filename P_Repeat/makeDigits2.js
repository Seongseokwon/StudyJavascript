function makeDigits2(num) {
    let res = '';
    let i = 1;
    while (i <= num){
        if (i === num)
            res += String(i);
        else
            res += String(i) + "-";
        i++;
    }
    return res;
}
//입력 받은 숫자와 i의 값이 같아 지면 숫자만 더해주게 해주는 코드입니다
// 그렇지 않은경우에는 숫자와 - 를 같이 더해줍니다.

function makeDigits2(num) {
    let res = '';
    let i = 1;
    while (i <= num){
        res += String(i) + "-";
        i++;
    }
    return res.slice(0,-1);
}
//코드가 조금 짧아졌죠 ? 이 코드는 입력받은 숫까지 모두
// num- 를 더해주다가 결과 값을 return 할 때 마지막 위치에있는
//문자를 slice를 통해서 잘라내서 리턴해주는 코등서
//같은 결과 값을 낼 수 있습니다.
//-1대신 res.length -1을 해도 같은 결과를 나타냅니다.
//slice 대신 substring을 사용하여도 같은 결과 입니다.