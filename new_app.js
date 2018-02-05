//	funcion isAvalidCard y condicion para que el input no sea algo vacio o sean letras
var isAvalidCard = function() {
  var input = '';
  var result = [];
  do {
	  input = prompt('ingrese su numero de tarjeta');
	  if (input === '') {
      alert('ingrese su numero de tarjeta');
	  }
  } while (input.length === 0 || isNaN(input));
  // se parsea,se coloca en un array y se invierte
  var arr = parseInt(input);
  var obj = {};
  obj.card = [0, arr];
  myArr = obj.card;
  var inverse = myArr.reverse();
  // define la posicion impar
  for (i = 1 ; i < inverse.length ; i++) {	
    if (i % 2 !== 0) {
      result = push[i];
    }
    console.log(temp1);
    // define la posicion par
    if (i % 2 === 0) {
      result = push[i * 2];
    } else {
      if ((inverse[i] * 2) >= 10) {
        result += ((inverse[i] * 2) - 10) + 1;
      }
    }
  }

	  if ((result % 10) === 0) {
		  alert('su tarjeta es valida');
	  } else {
		  alert('su tarjeta es invalida');
	  } 
};

isAvalidCard();