//Olivia Gallager Period 6 Softdev

/*
Create an html5/javascript program that can display the following animations:
	1. A circle growing and shrinking CHECK
	2. Mimic the classic dvd player screensaver.
For more information see here: https://www.youtube.com/watch?v=iI-RY8ducRc
	3. Attach both animations to buttons
	4. Include a stop button
*/



var canvas = document.getElementById("miley");
var c = canvas.getContext('2d');
var stopBtn = document.getElementById("stop");
var circleBtn = document.getElementById("circle");
var dvdBtn = document.getElementById("dvd");
//var image = "dvd.jpg"
var reqId;
var shrinking = false;
	
var img = new Image();
img.onload = function (xcor, ycor) {
    c.drawImage(img, xcor, ycor);
}
img.src = "dvd.png";





var animateCircle = function() {
	var radius = 0;
	window.cancelAnimationFrame( reqId );

	var circle = function() {
		c.clearRect(0,0,canvas.width,canvas.height);
		c.beginPath();
		c.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
		c.stroke();
		c.fill();
		//console.log('haha');
		if (shrinking && radius == 0) {
			shrinking = false;
		}
		if (!shrinking) {
			radius ++;
		}
		if ((radius > canvas.width/2 || radius > canvas.height/2) || shrinking ) {
			radius --;
			shrinking = true;
		}
		reqId = window.requestAnimationFrame( circle );
	}
	circle();
}


var dvd = function() {
	var xcor = 0;
	var ycor = 3;
	var yDec = false;
	var xDec = false;
	window.cancelAnimationFrame( reqId );

	var bounceySquare = function () {
		c.clearRect(0,0,canvas.width,canvas.height);
		c.beginPath();
		//c.drawImage(img, xcor, ycor);
		img.onload(xcor,ycor);
		//c.fillRect(xcor,ycor,50,50)
		c.stroke();
		c.fill();
		if (xDec) {
			xcor --;
		}
		else {
			xcor ++;
		}
		if (yDec) {
			ycor --;
		}
		else {
			ycor++;
		}
		if (ycor + img.height >= canvas.height) {
			yDec = true;
			console.log("ugh");
		}
		if (xcor + img.width >= canvas.width) {
			xDec = true;
			console.log("ughh");
		}
		if (ycor <= 0) {
			yDec = false;
			console.log("ughhh");
		}
		if (xcor <= 0) {
			xDec = false;
			console.log("ughhhh");
		}
		reqId = window.requestAnimationFrame (bounceySquare)
	}
	bounceySquare();
}


var stopIt = function() {
	window.cancelAnimationFrame( reqId );
	console.log('ugh');
}



stopBtn.addEventListener("click", stopIt);
circleBtn.addEventListener("click", animateCircle);
dvdBtn.addEventListener("click", dvd);





