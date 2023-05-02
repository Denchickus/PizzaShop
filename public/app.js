function something(){

	// let x = window.localStorage.getItem('ccc'); // x = hh['bbb']

	// x = x * 1 + 1; // x = x + 1

	// window.localStorage.setItem('ccc', x); // hh['bbb'] = x

	// alert(x);
}


function add_to_cart(id){

	let key = 'product_' + id;

	let x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	// вывод количества item'ов в корзине
	// alert('Items in your cart: ' + cart_get_number_of_items() );
}

function cart_get_number_of_items(){
	let cnt = 0;

	for(let i = 0; i < window.localStorage.length; i++){

		let key = window.localStorage.key(i); //получаем ключ
		let value = window.localStorage.getItem(key); // получаем значение

		if(key.indexOf('product_') == 0){
			cnt = cnt + value * 1;
		}


	}
	return cnt;
}


