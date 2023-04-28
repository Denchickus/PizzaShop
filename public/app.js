function something(){

	let x = window.localStorage.getItem('ccc'); // x = hh['bbb']

	x = x * 1 + 1; // x = x + 1

	window.localStorage.setItem('ccc', x); // hh['bbb'] = x

	alert(x);
}