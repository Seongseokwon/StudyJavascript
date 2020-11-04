function getType(anything) {
	if(Array.isArray(anything))
		return 'array';
	else if (anything === null)
		return 'null';
	else
		return typeof(anything);
}

/*
	typeof를 통해서 입력받은 anything의 타입을 확인 할 수 있습니다.
	Array.isArray를 통해서 배열을 확인 해 줄 수 있는데 그냥 typeof만
	해줘도 해결되지 않을까? 라는 생각을 할수있습니다. 하지만 배열을 typeof를 하면
	object가 나오는것을 확인 할 수 있습니다. object는 {name : 'seokwon'}같이
	표현되어 사용됩니다. 일단 생김새부터 배열과 다르지만 typeof에서는 배열이 저값이
	나오므로 배열일때는 다시 확인 해 주기 위해서 Array.isArrray(anything)을
	활용하여서 배열을 판단해 줍니다.
*/