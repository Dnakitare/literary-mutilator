// More Worf
function iAmWorf() {
	document.getElementById("worf").innerHTML = document.getElementById("worf").innerHTML.replace(' I ', '<strong>Worf</strong> ');
}
// less Worf
function noWorf() {
	document.getElementById("worf").innerHTML = document.getElementById("worf").innerHTML.replace('Worf', '');
}

/*const xhr = new XMLHttpRequest();

xhr.onload = function() {
	console.log(this);
};

xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();
*/

// shuffle
function jibberish() {
	var worf = document.getElementById("scramble");
	var string = worf.innerText;
	var array = string.split(" ");

	for(var i = 0; i < array.length; i++) {
		var foo = Math.floor(Math.random() * array.length);
		var bar = array[i];
		array[i] = array[foo];
		array[foo] = bar;
	}
	array=array.join(" ");
	document.getElementById("newScramble").innerHTML = array
};