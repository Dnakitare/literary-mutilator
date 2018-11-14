function iAmWorf() {
	document.getElementById("worf").innerHTML = document.getElementById("worf").innerHTML.replace(' I ', '<strong>Worf</strong> ');
}

function noWorf() {
	document.getElementById("worf").innerHTML = document.getElementById("worf").innerHTML.replace('Worf', '');
}