// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini
// dello slider In oltre per scorrere le immagini permettere anche l’uso delle frecce
// sinistra e destra della tastiera Utiliziamo una classe first e last per capire quali
// sono la prima e ultima immagine dello slider Utilizziamo una classe active per aiutarci
//  a capire quale è l’immagine attuale da visualizzare nello slider

//Imposto il ready per accertarmi del corretto caricamento

//Selezionare frecce
var frecciaDx = $('.next > .fa-angle-right');
var frecciaSx = $('.prev > .fa-angle-left');



// Al click su freccia a DESTRA cambia immagine
frecciaDx.click(function(){

  //Selezionare pallini
  var pallino = $('.nav > i.active');

  //Selezionare immagini
  var immagine = $('.images img.active');

  immagine.removeClass('active')
  pallino.removeClass('active')
  immagine.next('img').addClass('active')
  pallino.next('i').addClass('active')

//Passaggio ultima prima
  if (immagine.hasClass('last')) {
    $('img.first').addClass('active')
  }

  if (pallino.hasClass('last')) {
    $('i.first').addClass('active')
  }

})



//Al click su freccia SINISTRA torna indietro
frecciaSx.click(function(){

  //Selezionare pallini
  var pallino = $('.nav > i.active');

  //Selezionare immagini
  var immagine = $('.images img.active');

  immagine.removeClass('active')
  pallino.removeClass('active')
  immagine.prev('img').addClass('active')
  pallino.prev('i').addClass('active')

  //Passaggio prima ultima
    if (immagine.hasClass('first')) {
      $('img.first').removeClass('active')
      $('img.last').addClass('active')
    }

    if (pallino.hasClass('first')) {
      $('i.last').addClass('active')
    }

})
