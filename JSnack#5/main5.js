// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array


// dichiaro var
var array, num;

// creo array
array = [];

// inserisco 6 volte un numero
for (var i = 0; i < 6; i++) {

  num = parseInt(prompt('inserisci un numero'));

  // se è dispari lo pusho nell'array
  if (Number.isNaN(num)){   //vale su input?
     alert('HO DETTO NUMERO!');
     i= i-1;
   }

  else if(num % 2 != 0){
   array.push(num);


  }
 console.log(num);
}
console.log(array);
