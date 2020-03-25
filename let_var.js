console.log ('var,let y const');
//una diferencia entre let y var es que let no se puede poner dos veces dentro de un mismo ambiente porque aparece un error y var lo podemos poner todas las veces que queramos. Let declara variables que van a vivir solo dentro de un ambiente por ejemplo:un ciclo


//let i=50;
//for(let i=0;i<=5;i++){;
//  console.log(i);
//}
//console.log(i);


let i=60;
if(true){
    let numero = 40;
    console.log('dentro del if: '+ numero);
}
console.log('fuera del if: '+ i);

//const:cuando trabajemos con una constante si o si hay que ponerle un valor o sino nos dara error. una constante solo la podemos declarar una vez.

//const numero=44
//numero=50
//console.log(numero) //esto no funcionara 

//cuando declaremos una variable que va a ser redeclarada o con otro valor utilizemos el let.

const numeros=[30,40,50];
numeros.push(10); //push agrega un valor al arreglo
console.log(numeros);
