const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

setInterval(function () {
	var today = new Date();
	if(today.getMinutes() < 10) {
		var minutes = '0' + today.getMinutes();
	} else {
		var minutes = today.getMinutes();
	}
	if(today.getSeconds() < 10) {
		var seconds = '0' + today.getSeconds();
	} else {
		var seconds = today.getSeconds();
	}

	document.getElementById('data').innerHTML = today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear() + " года";
	document.getElementById('time').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;
}, 1000)