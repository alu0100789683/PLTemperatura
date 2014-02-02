var expect = chai.expect;

describe('Conversor de Temperaturas', function() {
    'use strict';
    var converted1,converted2,converted3,converted4,converted5,converted6;
    var ourQuiz, form;
    var contestData = {
        question1: '1C',
        answer1: '33.8F',
        question2: '-1C',
        answer2: '30.2F',
        question3: '1F',
        answer3: '-17.22222222222',
	question4: '-1F',
        answer4: '-18.33333333333',
	question5: '+1e3C',
        answer5: '1832F',
	question6: '+1e-3F',
        answer6: '-17.77722222222',
    };

    before(function() {
        //ourQuiz = new Quiz(contestData);
        //form = jQuery('body').append(formMarkup);
    });

    after(function() {
        jQuery('#fixture').remove();
    });

    beforeEach(function() {
        document.getElementById('original').value = contestData.question1;
	calculate();
	converted1 = document.createElement("div");
	converted1.innerHTML = document.getElementById('converted').innerHTML;
	//------------
	document.getElementById('original').value = contestData.question2;
	calculate();
	converted2 = document.createElement("div");
	converted2.innerHTML = document.getElementById('converted').innerHTML;
	//------------
	document.getElementById('original').value = contestData.question3;
	calculate();
	converted3 = document.createElement("div");
	converted3.innerHTML = document.getElementById('converted').innerHTML;
	//------------
	document.getElementById('original').value = contestData.question4;
	calculate();
	converted4 = document.createElement("div");
	converted4.innerHTML = document.getElementById('converted').innerHTML;
	//------------
	document.getElementById('original').value = contestData.question5;
	calculate();
	converted5 = document.createElement("div");
	converted5.innerHTML = document.getElementById('converted').innerHTML;
	//------------
	document.getElementById('original').value = contestData.question6;
	calculate();
	converted6 = document.createElement("div");
	converted6.innerHTML = document.getElementById('converted').innerHTML;
    });
    
    it('Basico Celcius sin signo: 1C', function() {
	expect(converted1.innerHTML).to.equal(contestData.answer1);
    });
    it('Basico Celcius con signo: -1C', function() {
	expect(converted2.innerHTML).to.equal(contestData.answer2);
    });
    it('Basico fahrenheit sin signo: 1F', function() {
	expect(converted3.innerHTML).to.equal(contestData.answer3);
    });
    it('Basico fahrenheit con signo: -1F', function() {
	expect(converted4.innerHTML).to.equal(contestData.answer4);
    });
    it('Avanzado con exponente y signos: +1e3C', function() {
	expect(converted5.innerHTML).to.equal(contestData.answer5);
    });
    it('Avanzado con exponente y signos: +1e-3F', function() {
	expect(converted6.innerHTML).to.equal(contestData.answer6);
    });
    it('Fallo de prueba: +1e-3F', function() {
	expect(converted1.innerHTML).to.equal(contestData.answer6);
    });
});


