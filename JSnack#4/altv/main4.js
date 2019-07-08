
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// se sei invitato, allora puoi portare un amico che si aggiunge alla lista


// dichiaro var e array
var lista, nome, invito, elemento, amico, nomeamico;
elemento = document.getElementById('mio-id');

lista = [
  'pinco',
  'pallo',
  'pillo',
  'pullo',
  'peppo'
]

// inserisco nome
nome = prompt('inserisci il tuo nome').toUpperCase();
invito = 'non sei invitato';

// confronto se concorda con array

for (var i = 0; i < lista.length; i++) {
  if(lista[i].toUpperCase() === nome){
    invito = 'sei invitato';
  }

}

// rispondo
console.log(invito);




// porta un amico?



if (invito === 'sei invitato'){
  amico = prompt('porti qualcuno? si/no').toUpperCase();
  // nome amico


  if(amico !== 'NO'&& amico !== 'SI'){
  alert('non ho capito');
  amico = prompt('porti qualcuno? si/no').toUpperCase();

  }

  if (amico === 'SI'){
    nomeamico = prompt('aggiungi in lista il suo nome');
    // push nell'array
    lista.push(nomeamico);
  }

  if(amico !== 'NO'&& amico !== 'SI'){
  alert('stai esagerando, ricarica la pagina e ricomincia!');


  }

}
else if (invito === 'non sei invitato') {
  elemento.innerHTML = 'non sei stato invitato :('
}

// push nell'array
// lista.push(nomeamico);

// stampa nuova lista
console.log(lista);



// visualizza in pagina messaggio

if(invito === 'sei invitato' && amico === 'SI'){
  elemento.innerHTML = 'ti aspettiamo con ' + nomeamico;
}
else if (invito === 'sei invitato' && amico === 'NO'){
  elemento.innerHTML = 'ti aspettiamo. non preoccuparti, conoscerai sicuramente qualcuno!';
}
