var h="";
for(var i=0; i<7; i++){
	h += "#";
	console.log(h);
}


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


var size = 8
var pole = "# # # #"
	for(var i=0; i <= size; i++){
		if(i%2==0)
			console.log(" "+pole);
		else console.log(pole);
	}