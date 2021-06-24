var x = 5, y = 10, z = 15;

		document.getElementById("p1").innerHTML += x + y; //returns 15

		document.getElementById("p2").innerHTML += y - x; //returns 5

		document.getElementById("p3").innerHTML += x * y; //returns 50

		document.getElementById("p4").innerHTML += y / x; //returns 2

		document.getElementById("p5").innerHTML += x % 2; //returns 1

		x++;
		document.getElementById("p6").innerHTML += x; //returns 6

		x--;
		document.getElementById("p7").innerHTML += x - 1; //returns 4