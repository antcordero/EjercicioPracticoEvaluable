/*
funciones para el -registro
*/
document.addEventListener('DOMContentLoaded', function() {
    let formularioRegistrado = document.getElementById('formulario-registrado');
  
    if (formularioRegistrado) {
      formularioRegistrado.style.display = 'none';
    }
  
    //mostrar
    var registradoDiv = document.getElementById('registrado');
    if (registradoDiv) {
      registradoDiv.addEventListener('click', function() {
        formularioRegistrado.style.display = 'block';
      });
    }
  });
  
/*
funciones para el no-registro
*/
document.addEventListener('DOMContentLoaded', function() {
    /*ocultar */
    let formularioNoRegistro = document.getElementById('formulario-no-registro');
    if(formularioNoRegistro) {
      formularioNoRegistro.style.display = 'none';
    }
  
    /*mostrar */
    let noRegistradoDiv = document.getElementById('no-registrado');
    if(noRegistradoDiv) {
      noRegistradoDiv.addEventListener('click', function() {
        formularioNoRegistro.style.display = 'block';
      });
    }
  });
  