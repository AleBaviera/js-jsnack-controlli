
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// dichiaro var e array
var lista, nome, invito;
lista = [
  'pinco',
  'pallo',
  'pillo',
  'pullo',
  'peppo'
]

// inserisco nome
nome = prompt('inserisci il tuo nome');
invito = 'non sei invitato';
// confronto se concorda con array

for (var i = 0; i < lista.length; i++) {
  if(lista[i] === nome){
    invito = 'sei invitato';
  }

}

// rispondo
console.log(invito);
