function mostrar(){
    //Nombre Completo
    var name = document.getElementById("nombre").value;
    var secondName = document.getElementById("dosNombre").value;
    var primerApellido = document.getElementById("Apellido").value;
    var segundoApellido = document.getElementById("segApellido").value;
    document.getElementById("name").innerText = name + " " + secondName + " " + primerApellido + " " + segundoApellido;



    //DNI
    var numero = document.getElementById("dni").value;
    var ultimo = numero = numero % 10;
    document.getElementById("ultimo").innerText = ultimo;
    

    //Edad
    var birthday = document.getElementById("Fecha").valueAsDate;
    var epoca = birthday.getFullYear();
    var mes = birthday.getMonth()+1;
    var dia = birthday.getDay();
    if(mes<6){
        document.getElementById("edad").innerHTML = 2024 - epoca;
    }else{
        document.getElementById("edad").innerHTML = 2024 - epoca-1;        
    }
}



/*

function showFirstCharacter() {
    // Obtener el valor ingresado por el usuario
    var name = document.getElementById("name").value;

    // Verificar si se ingresó un nombre
    if (name.length > 0) {
        // Obtener el primer carácter
        var firstCharacter = name.charAt(0);

        // Mostrar el primer carácter en otro espacio HTML
        document.getElementById("firstCharacterDisplay").innerText = "Primer Carácter: " + firstCharacter;
    } else {
        alert("Por favor ingresa un nombre primero.");
    }
}

*/