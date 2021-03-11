// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini
// dello slider In oltre per scorrere le immagini permettere anche l’uso delle frecce
// sinistra e destra della tastiera Utiliziamo una classe first e last per capire quali
// sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci
//  a capire quale è l’immagine attuale da visualizzare nello slider

//Imposto il ready per accertarmi del corretto caricamento

  //Selezionare pallini
  var pallino = $('.nav > .fa-circle');

  //Selezionare immagini
  var immagine = $('.images > img');


//Selezionare frecce
var frecciaDx = $('.next > .fa-angle-right');
var frecciaSx = $('.prev > .fa-angle-left');

// Al click su freccia a dx cambia immagine

frecciaDx.click(function(){

if (immagine.hasClass('first')) {
  immagine.next().addClass('active')
} else {

}

})
