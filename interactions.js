 // ----------------------------------------------INTERACCIÓN : Menú desplegable------------------------------
    
    $(document).ready(function() {
      $('.dropdown-toggle').dropdown();
  });

 // ----------------------------------------------INTERACCIÓN : Carrusel de imagenes------------------------------

  if(document.querySelector('#container-slider')){
    setInterval('funcionEjecutar("siguiente")',5000);
 }
 //-LIST SLIDER 
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.anteriorentDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          funcionEjecutar(arrItem[1]);
          return false;
       });
     });
 }
 
 function funcionEjecutar(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, siguienteElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'anterior' || side == 'siguiente'){
 
         if(side=="anterior"){
             siguienteElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             siguienteElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         siguienteElement = side;
         side = (curElement > siguienteElement)?'anterior':'siguiente';
 
     }
     
     //PUNTOS INFERIORES
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[siguienteElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[siguienteElement].style.opacity=1;
     elements[siguienteElement].style.zIndex =1;
 }





 // ----------------------------------------------INTERACCIÓN : Validación de formulario------------------------------
$(document).ready(function () {
    $('#miFormulario').submit(function (event) {
        event.preventDefault();
        var nameInput = $('#name');
        var emailInput = $('#email');
        var phoneInput = $('#phone');
        var messageInput = $('#message');

        // Restablece los mensajes de error
        $('#name-error').text('');
        $('#email-error').text('');
        $('#phone-error').text('');
        $('#message-error').text('');

        // Realiza la validación de los campos requeridos.
        var isValid = true;

        if (!nameInput.val().trim()) {
            isValid = false;
            $('#name-error').text('Se requiere que ingrese su Nombre.');
        }

        if (!emailInput.val().trim()) {
            isValid = false;
            $('#email-error').text('Se requiere que ingrese su Correo.');
        } else {
            // Validación de formato de correo electrónico
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailInput.val())) {
                isValid = false;
                $('#email-error').text('El formato del correo electrónico no es válido.');
            }
        }

        if (!phoneInput.val().trim()) {
            isValid = false;
            $('#phone-error').text('Se requiere que ingrese un Número de Teléfono.');
        }

        if (!messageInput.val().trim()) {
            isValid = false;
            $('#message-error').text('Se requiere que ingrese un mensaje.');
        }

        if (isValid) {
            var submitButton = $('#submitButton');
            submitButton.prop('disabled', true);
            $('#submitErrorMessage').addClass('d-none'); // Oculta el mensaje de error.
            $('#submitSuccessMessage').removeClass('d-none'); // Muestra el mensaje de éxito.
        } else {
            $('#submitErrorMessage').removeClass('d-none'); // Muestra el mensaje de error.
        }
    });
});



