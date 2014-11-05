var dateToReach = "11/5/2014 13:59:00"; /* Das Datum/die Uhrzeit für den Countdown */
		
	function showTime() {
		/* Datums Differenz ausrechnen */
		var diff = new Date(dateToReach).getTime() - new Date().getTime();
		var days = Math.floor(diff / 1000 / 60 / 60 / 24);
		var hours = Math.floor(diff / 1000 / 60 / 60 % 24);
		var minutes = Math.floor(diff / 1000 / 60 % 60);
		var seconds = Math.floor(diff / 1000 % 60);
		var start = document.getElementById('start');

		/* Ergegbnisse in die Elemente reinschreiben */
		if( diff <= 0){
			start.innerHTML = 'Battle begins';
		}else{
		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	}	}
	
	function updateTime() { /* Diese Funktion wird nach dem Laden aufgerufen */
		showTime(); /* Zeit auf der Website aktualisieren */
		setTimeout("updateTime()", 1000); /* Eine Sekunde warten und Funktion erneut aufrufen */
	}
	window.onload = function(){
		updateTime();
	}