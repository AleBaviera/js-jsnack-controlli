// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array


// dichiaro var
var array, num, elemento, eletemp;

// creo array
array = [];
elemento = document.getElementById('mio-id');

// inserisco 6 volte un numero
for (var i = 0; i < 6; i++) {

  num = parseInt(prompt('inserisci un numero'));

// se nn è numero
  if (Number.isNaN(num)){
     alert('HO DETTO NUMERO!');
     i= i-1;
   }
// se è dispari lo pusho nell'array
  else if(num % 2 != 0){
   array.push(num);

  }
 console.log(num);


}
console.log(array);

for (var i = 0; i < array.length; i++) {
  eletemp = elemento.innerHTML;
  elemento.innerHTML = eletemp + '<li>' + array[i] + '</li>';
  console.log('eletemp è ' + eletemp);
}
