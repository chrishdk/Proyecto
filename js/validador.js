// objeto.metodo(json)
jQuery(document).ready(function () {
$("#formulario1").validate({
  rules: {

      "id_txtEmail": {
        required: true,
        email: true
      },
      "txtContrasena": {
          required: true,
          minlength: 5
      },
      "txtRepetirContrasena": {
          required: true,
          equalTo: '#id_txtContrasena'
      }
  }, // --> Fin de reglas
  messages: {
      "id_txtEmail": {
        required: 'Ingrese email',
        email: 'No cumple formato'
      },
      "txtContrasena": {
          required: 'Ingrese la contraseña',
          minlength: 'Mínimo 5 caracteres'
      },
      "txtRepetirContrasena": {
          required: 'Repita la contraseña',
          equalTo: 'Debe ser igual al campo contraseña'
      }
  } //-->Fin de mensajes

});
});
