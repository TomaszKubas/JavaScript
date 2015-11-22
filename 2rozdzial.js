/*choinka*/
var h="";
for(var i=0; i<7; i++){
	h += "#";
	console.log(h);
}

/*FizzBuzz */
var a="Fizz"
var b="Buzz"
for(var i=1; i<=105; i++){
	if(i%3==0 && i%5==0) 
		console.log(a + " " + b);
	else if(i%3==0)
		console.log(a);
	else if(i%5==5)
		console.log(b);
	else console.log(i);
}
/* szachy 8*8 */
var size = 8;
var pole = "# # # #";
	for(var i=1; i <= size; i++){
		if(i%2==0)
			console.log(" "+pole);
		else console.log(pole);
	}
/* szachy inne pola*/
var size = 8;
var wig = size/2;
var h="";
var pole = "# "

	for(var x=1; x <= wig; x++){
			h += pole;
		}
	for(var i=1; i <= size; i++){
		if(i%2==0)
			console.log(" "+h);
		else console.log(h);
	}