function factorial(num){
    let f_num = 1;
    for(let i = 1; i <= num; i++){
        f_num = f_num * i;
    }
    return f_num;
}

// factorial(5) => 1 * 2 * 3 * 4 * 5;
// 입력한 숫자까지 1씩 늘어나면서 곱해준 결과값을 리턴

function factorial(num){
    let f_num = 1;
    for(num; num > 0 ; num--){
        f_num = f_num * num;
    }
    return f_num;
}

// 반대로 내려오면서 곱해주기