var arr = []; //создаем пустой масив


for (var i = 0; i < 5; i++) {
	arr[i] = prompt ('Введите любое имя');//заполняем масив именами которые вводит пользователь
}


var yourName = prompt ('Введите ваше имя');
var flag = false;


for (var i = 0; i < arr.length; i++) {//проходим по масиву и проверяем ввел ли пользователь имя, которое содержится в нашем масиве

	if (arr[i] === yourName && arr[i] != '') {//пустая строка тоже не подходит
		flag = true;
		break
	} else {
		flag = false;
	}

}


if (flag) {
	alert ('Добро пожаловать ' + yourName);//если имя пользователя совпало с одним из имен в нашем масиве
} else {
	alert ('Вы ввели имя не существующее в масиве имен');
}