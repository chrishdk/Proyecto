// objeto.metodo(json)

$("#formulario1").validate({
  rules: {
    txtnombre: {
      required: true,
      minlength: 2,
    },
    txtnombreusuario: {
      required: true,
      minlength: 4,
    },
    txtEmail: {
      required: true,
      email: true,
    },
    txtContrasena: {
      required: true,
      minlength: 5,
    },
    txtRepetirContrasena: {
      required: true,
      equalTo: "#id_txtContrasena",
    },
  }, // --> Fin de reglas
  messages: {
    txtnombre: {
      required: "Ingrese nombre",
      minlength: "No cumple formato",
    },
    txtnombreusuario: {
      required: "Debe tener un nombre de usuario",
      minlength: "Debe tener mínimo 4 carcteres",
    },
    txtEmail: {
      required: "Ingrese email",
      email: "No cumple formato",
    },
    txtContrasena: {
      required: "Ingrese la contraseña",
      minlength: "Mínimo 5 caracteres",
    },
    txtRepetirContrasena: {
      required: "Repita la contraseña",
      equalTo: "Debe ser igual al campo contraseña",
    },
  }, //-->Fin de mensajes
});
$("#iniciosesion").validate({
  rules: {
    txtusuario: {
      required: true,
    },
    txtcontrasena: {
      required: true,
    },
  },
  messages: {
    txtusuario: {
      required: "Ingrese nombre de usuario o correo",
    },
    txtcontrasena: {
      required: "Falta contraseña",
    },
  }, //-->Fin de mensajes
});
