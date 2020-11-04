function countCharater(str, letter) {
    let count = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === letter)
            count++;
    }
    return count;
}
/*
str문자열의 인덱스에 한개씩 접근하면서 그인덱스의 문자가
letter와 같다면 카운트 변수 값을 1씩 증가시켜주는 코드입니다.
*/
