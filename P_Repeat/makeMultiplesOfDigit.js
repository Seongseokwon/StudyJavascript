function makeMultiplesOfDigit(num) {
    let res = "";
    for(let i = 1; i <= num; i ++){
        if(i % 3 === 0)
            res += String(i);
    }
    return res;
}
//3의 배수를 어떻게 찾을건인가 ?
//반복문을 입력받은 수까지 도는 이유는 입력받은 숫자가
//3의 배수가 될 수도 있기 때문이다.