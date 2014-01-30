"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([+-]?\d+(?:\.\d+)?)(?:[eE]([+-]?\d+))?([cCfF])/;
  
  var m = temp.match(regexp);
  
  if (m) {
	var num = m[1];
	var exp = m[2];
    var type = m[3];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
		if(exp){
			exp = parseFloat(exp);
			num = Math.pow(num,exp);
		}
		result = (num * 9/5)+32;
		result = result + 'F';
    }
    else {
		if(exp){
			exp = parseFloat(exp);
			num = Math.pow(num,exp);
		}
		result = (num - 32)*5/9;
		result = result + 'C';
    }
    converted.innerHTML = result.slice(0,15);
  }
  else {
		converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
	}
}