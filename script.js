// function printName(){
// 	var name = document.getElementById("name").value;

// 	document.getElementById("result").innerHTML = name;
// }



// // #btn
// document.getElementById("btn").addEventListener("click",printName);


// function testName(a){
// 	console.log(a);
// }

var items = [{
	name:"hat",
	price: 15,
	qtty: 0
},{
	name:"glasses",
	price:20,
	qtty:0
}];
// i+=1;
for(var i =0; i<items.length; i++ ){
	document.getElementById("items").innerHTML += `
		<p>${items[i].name}</p>
		<p>${items[i].price}</p>
		<input type="submit" class="btn" value="Add to Cart">
		<hr>
	`;
	//"<p>"+items[i].name+"</p>"
}

var cart = [];

function addToCart(obj){
	if(obj.qtty == 0){
		cart.push(obj);
		obj.qtty++;
		showCart();
	}else {
		obj.qtty++;
		console.table(cart);
		showCart();
	}
}

var btns = document.getElementsByClassName("btn");
for(let i = 0; i< btns.length ; i+=1){
	btns[i].addEventListener("click",function(){
		addToCart(items[i])
		console.log(i)
	});
}

function showCart(){
	document.getElementById("cart").innerHTML ="";
	for(let i = 0; i< cart.length ; i++){
		document.getElementById("cart").innerHTML += `
			<p>${cart[i].name} | ${cart[i].price} | ${cart[i].qtty}</p>
		`
	}
}

