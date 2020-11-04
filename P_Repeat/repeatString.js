function repeatString(str, num){
    let repeatW = "";
    for(let i = 0; i < num ; i++){ // str을 몇번 출력할건지에대한 반복문
        for(let j = 0; j < str.length; j++){
            repeatW += str[j]; //str에 있는 단어를 문자열 변수에 담아준다.
        } 
    }
    return repeatW;
}

//repeat이라는 함수를 사용하면 엄청 간단히 풀 수 있습니다.
// str.repeat(num) 하지만 출제 의도와는 안맞는것 같아서 
//상세히 적지는 않았습니다.