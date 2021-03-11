//Selezionare frecce
var frecciaDx = $('.next > .fa-angle-right');
var frecciaSx = $('.prev > .fa-angle-left');


// Al click su freccia a DESTRA cambia immagine
frecciaDx.click(function(){

  //Selezionare pallini
  var pallino = $('.nav > i.active');

  //Selezionare immagini
  var immagine = $('.images img.active');

  //Rimuovo classe active
  immagine.removeClass('active')
  pallino.removeClass('active')
  //Aggiungo all'elemento successivo la classe active
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

  //Rimuovo classe active
  immagine.removeClass('active')
  pallino.removeClass('active')
  //Aggiungo all'elemento successivo la classe active
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

console.log();
