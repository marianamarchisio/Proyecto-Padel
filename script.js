function validar() {
    var nombre, apellido, correo, contrasenia, telefono, expresion;
    nombre = document.getElementById("name").value;
    apellido = document.getElementById("surname").value;
    correo = document.getElementById("email").value;
    contrasenia = document.getElementById("password").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;

    
    
    if (nombre ==="" || correo === "" || contrasenia === "" || apellido ==="" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length > 30){
        alert("El nombre es muy largo debe tener 30 caracteres como maximo");
        return false;
    }
    else if(apellido.length > 80){
        alert("Los apellidos son muy largos debe tener 80 caracteres como maximo");
        return false;
    }
    else if(correo.length > 100){
        alert("El correo es muy largo debe tener 100 caracteres como maximo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    else if(contrasenia.length > 20){
        alert("La contraseña debe tener 20 caracteres como maximo");
        return false;
    }
    else if(telefono.length > 10){
        alert("El numero de telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El numero de telefono ingresado no es un numero");
        return false;
    }
    else if(telefono.length > 10){
        alert("El numero de telefono es muy largo");
        return false;
    }
}