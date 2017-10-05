var isAvalidCard=function (){
var input = ''
var result= 0

do{
  input= prompt('ingrese su numero de tarjeta');
  if(input===''){
    alert ('ingrese su numero de tarjeta');
  }
}  while (input.length ===0);

var arr= parseInt(input);
var obj={};
obj.card=[0,arr];
myArr= obj.card;
var inverse = myArr.reverse();


  //define la posicion par /impar
  for(i=1;i<inverse.length; i++){ 
 //inicio posicion impar:
    if(i%2!==0){ //condicion si la posicion es impar
    
      result+=inverse[i];
    }
    
    //fin posicion impar.
        //para la posicion par: inicio
    if(i%2===0){
      result += inverse[i]*2
     
      }else{
        if((inverse[i]*2)>=10){
          result += ((inverse[i]*2)-10)+1
        }
      }
      
      
      }
     //fin posicion par
     
    
   //inicio valiacion:
   
   if((result%10)===0){
     alert ('su tarjeta es valida');
   }else{
     alert ('su tarjeta es invalida');
   }
    
  
 

}
isAvalidCard()