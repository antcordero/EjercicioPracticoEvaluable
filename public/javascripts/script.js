/*
funciones para el -registro
*/

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
  