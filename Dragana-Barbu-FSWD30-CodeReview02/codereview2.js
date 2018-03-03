function mynum() {
a = [1500, 500, 1800, 700],

l = [2500, 1500, 1000, 900],

ax = a[0] + a[1] + a[2] + a[3],
lx = l[0] + l[1] + l[2] + l[3],

axx = ax/4 ,
lxx = lx/4 ,


la = lxx - axx ;

document.getElementById("num1").innerHTML = axx + " €";
document.getElementById("num2").innerHTML = lxx + " €";

}
mynum()

if (axx > lxx){ 
		document.getElementById("text3").innerHTML = "<span>London</span> will be more affordable than <span>Amsterdam</span> for the New Year´s celebration Difference in price";

		document.getElementById("let").innerHTML = axx-lxx + " €";


} else {
	document.getElementById("text3").innerHTML = "<span>Amsterdam</span> will be more affordable than <span>London</span> for the New Year´s celebration Difference in price";

	document.getElementById("let").innerHTML =  lxx - axx + " €";

}

