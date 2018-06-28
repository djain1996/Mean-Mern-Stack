function calculateFactorial(num){
	var fact =1; 
	
	for(var i =1;i<=num;i++){
		fact = fact * i;
	}
	
	return (fact);
}


function computeFactorial(){
	var n = document.getElementById("n").value;
	var fact = calculateFactorial(n);
	document.getElementById("factorial").value = fact;
}
