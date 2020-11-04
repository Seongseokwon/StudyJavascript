function sumTo(num){
    let res = 0; //결과값을 담아줄 변수 선언 및 초기화
    for(let i = 1; i <= num; i++){
        res += i; // res = res + i 같은 코드입니다.
    }
    return (res);
}

function sumTo(num){
    let res = 0;
    for(num; num >0; num--){
        res += num;
    }
    return res;
    //입력받은 수 부터 1이 될 때 까지 더한값을 
    //결과에 저장해주는 코드
}