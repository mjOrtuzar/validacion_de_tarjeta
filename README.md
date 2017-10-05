PseudoCodigo:
# Creacion funcion isAvalidCard.

+el Usuario ingresa como dato __input__ su numero de tarjeta.
```javascript
do{
  input= prompt('ingrese su numero de tarjeta');   // do while comenzara a pedir el dato al usuario hasta que este lo ingrese.
  if(input===''){
    alert ('ingrese su numero de tarjeta');
  }
}  while (input.length ===0);```

aqui, el programa pedira que el usuario ingrese  lo que pide e insistira si el usuario no entrega nada.

+Como __input__ se ingresa como un __string__ y el programa trabaja con números enteros y no con strings, se procede a convertir el string en solo una cadena de numeros con el metodo __ParseInt__ y se guarda en una nueva variable  (var arr = parseInt(input);)

+luego se crea un obj vacio para que tenga como contenido un array, con el cual se trabaja despues.
```javascript
var obj={};   
obj.card=[0,arr];          
myArr= obj.card;```
en __obj.card__ se crea el array que ira dentro del obj pero con un 0 acompañando al conjunto de numeros del input. Asi el array comenzaria desde la posicion 1 y no desde la posicion 0.

+Ahora se crea el array definitivo con el cual se trabajara hasta el final del codigo. se crea la variable __var inverse__ el cual contendra la var myArr pero al reves con el metodo .reverse(). 

###creacion for

+ se crea el bucle for  para que itere a lo largo de la variable __inverse__ 
+dentro del bucle for se crean 2 if
+ en el primer if contara las posiciones que son impares y mantendra los numeros de esas posiciones.
+el segundo if contara las posiciones que son pares y ejecutara una serie de instrucciones:
```javascript
if(i%2===0){
      result += inverse[i]*2
     
      }else{
        if((inverse[i]*2)>=10){
          result += ((inverse[i]*2)-10)+1
        }
      }```
+ si la posicion es par, se multiplicaran los elementos de los indices por 2. si el resultado de esas multiplicaciones es mayor a 10, el resultado se sumara sus dos cifras. si no es menor a 10 mantiene el resultado.

+result en toda la funcion , suma todo de una vez por lo que al ver si la tarjeta es valida:

```javascript
if((result%10)===0){
     alert ('su tarjeta es valida');
   }else{
     alert ('su tarjeta es invalida');
   }```

+si el residuo de  resultado con 10 es igual a 0, retornara un alert diciendo que la tarjeta es valida, si no, retornara un alert que dira que la tarjeta es invalida.