"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([+-]?\d+(?:\.\d+)?)(?:[eE]([+-])?(\d+))?([cCfF])/;
  
  var m = temp.match(regexp);
  
  if (m) {
	var num = m[1];
	var expS = m[2];
	var exp = m[3];
    var type = m[4];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
		
		
		if(exp){
			if(expS && expS=='-'){
				for (var i=0;i<exp;i++){
					num = num / 10;
				}
			}else{
				for (var i=0;i<exp;i++){
					num = num * 10;
				}
			}
		}
		result = (num * 9/5)+32;
		result = result + 'F';
    }
    else {
		
		
		if(exp){
			if(expS && expS=='-'){
				for (var i=0;i<exp;i++){
					num = num / 10;
				}
			}else{
				for (var i=0;i<exp;i++){
					num = num * 10;
				}
			}
		}
		result = (num - 32)*5/9;
		result = result + 'C';
    }
    converted.innerHTML = result.slice(0,15);
  }
  else {
		converted.innerHTML = "Expresión Inválida , los signos y</br> el exponente es opcional </br> Requerido Un digito (1 , 2 , 3 , ...) </br>y Simbolo de conversion (C o F)";
	}
}