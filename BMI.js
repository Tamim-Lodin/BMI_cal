// BMI = kg / (H/100 * H/100)
document.getElementById("submit").addEventListener("click",bmicalculator);
function bmicalculator(){
	// parseint element takes value in string and returns in integer
	var cm = parseInt(document.getElementById("cm").value);
	var kg = parseFloat(document.getElementById("kg").value);

	var bmi;
	var newcm = parseFloat(cm/100);

	bmi = kg / (newcm * newcm);
	bmi = bmi.toFixed(1);
	// tofixed method return value with one float point float just one
	console.log(bmi);
	document.getElementById("result").innerHTML = bmi;


}