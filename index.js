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

// Grow the t's
function bigT() {
	document.getElementById("tees").innerHTML = document.getElementById("tees").innerHTML.replace(/t/gi, '<em>T</em>');
}

// Shrink the T's
function lilT() {
	document.getElementById("tees").innerHTML = document.getElementById("tees").innerHTML.replace(/T/gi, '<b>t</b>');
}

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
}


document.addEventListener("DOMContentLoaded", function(event) {
	// TIER IV
	// declare global variables
	const body = document.querySelector('body');

	// fetch API
	fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			let jsonObj = (myJson['body']);
			let para = document.createElement('p');
			para.innerHTML = "<em>Here is some text inserted using fetch API: </em>" + jsonObj;
			body.appendChild(para);

			console.log(JSON.stringify(para));
		});
});
