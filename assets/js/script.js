$(document).ready(function(){
  $('[data-toggle="tooltip"]'). tooltip();
  $ ('#EnviarCorreo'). click (function() {
      alert('el correo fue enviado correctamente...');
  });
});

const textoRojo1 = document.getElementById('ingredientes');
textoRojo1.addEventListener('dblclick', function(){
  textoRojo1.className = "cambio-color-a-rojo"
});
const textoRojo2 = document.getElementById('preparacion');
textoRojo2.addEventListener('dblclick', function(){
  textoRojo2.className = "cambio-color-a-rojo"
});

$(document).ready(function () {
  $('#titletoggle').click(function () {
    $('.card').toggle();
  });
});

