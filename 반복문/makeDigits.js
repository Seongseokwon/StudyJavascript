function makeDigits(num){
    let num_str = "";
    for(let i = 1; i <= num; i++)
        num_str += String(i);
    return num_str;
}

//빈 문자열 변수를 선언해주고 그안에 
//연속해서 입력받은 수만큼 쌓아주면된다
//String(i)를 해준 이유는 문자열에 문자를 더해주기 위해서 
//그냥 i를 해도 결과는 똑같다.
