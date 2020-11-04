function findTheBug(word){
    for(let i = 0; i < word.length; i++){
        if (word[i] === '#')
            return (i);
    }
    //만약에 word문자열 i번째의 값이 #이라면 
    //그때의 i의 값을 반환해주는 코드입니다.
}

function findTheBug(word){
    for(let i = 0; i < word.length; i++)
        if( i === word.indexOf('#'))
            return (i);
    //indexOf('#')을 통해서 #의 인덱스 값을 가져옵니다.
    // i값과 인덱스 값이 같다면 그때 i값을 반환해줍니다.
}

// 위 코드에서 i가 있을때만 리턴을 해주는데
//없을때는 어떻게 되는거죠 ? 하는 질문이 있을수 있다.
//명시적으로 'return undefined'를 해 줄 수도있다.
//하지만 다른방법으로 findThBug('abc')를 했을때 
//typeof를 해보면 그또한 undefined이다. 왜일까?
//개인적인 생각으로는 저함수는 정의되었지만 그를 통해 나온 결과가
//없기때문에 undefined라고 생각한다.