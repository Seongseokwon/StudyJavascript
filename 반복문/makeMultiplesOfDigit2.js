function makeMultiplesOfDigit2(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    if(num1 >= num2){   
        for(num2; num2 <= num1; num2++)
            if(num2 !== 0)
                if(num2 % 2 === 0)
                    count++;
    }else{
        for(num1; num1 <= num2; num1++)
            if(num1 !== 0)
                if(num1 % 2 === 0)
                    count++;
    }
    return count;
}
/*
count라는 변수를 선언해줘서 짝수가 나오면 카운트를 늘려주고
그 값을 반환해 주는 코드입니다. 확인해줘야 할 것은 두 숫자중에 어느숫자가
더 큰지 확인해주면 좀 더 쉽게 결과를 구할 수 있을것 같다고 생각했습니다.
첫 번째 반복문을 해석해보면 num1이 num2보다 크거나 같다면 
num2부터 num2 <= num1까지 num2의 값을 1씩 증가시키면서 확인을 해 줍니다.
num1과 같을때 까지 확인한 이유는 num1이 짝수일 수도 있기 때문입니다.
*/