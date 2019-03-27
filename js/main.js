'use strict'

var start = prompt('Кто пришел?');

	if (start === 'Админ')	{

		var password = prompt('Пароль?');
	if (password === 'Чёрный Властелин' ) {
		alert('Добро пожаловать');

	}	else if (password === null) {
		alert('Вход отменён');
	}	else {
		alert('Пароль неверен')
	}

	} else if (start === null) {
		alert('Вход отменен');
	}  else {
		alert('Я вас не знаю')
	}

