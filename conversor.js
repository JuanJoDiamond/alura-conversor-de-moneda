//? Codigo de la clase de ALURA:

//var valorEnDolar = 1050.566;
//var cotizacionEnPesoArg = 1045;
//var valorEnPesos = valorEnDolar * cotizacionEnPesoArg;
//valorEnPesos = valorEnPesos.toFixed(2);
//alert("$. " + valorEnPesos);

//? Codigo de la clase de ALURA mejorado por mi:

function validarNombre(nombre) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(nombre);
}

function validarValorDolar(valor) {
    // Validamos si el valor es un número
    if (isNaN(valor)) {
        return false;
    }

    // Validamos si el valor solo contiene números y un punto decimal
    var regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(valor);
}

function mostrarPrompt(texto) {
    nombreUsuario = prompt(texto);
    if (!validarNombre(nombreUsuario)) {
        alert("El nombre solo debe contener letras. Intente nuevamente.");
        mostrarPrompt(texto); // Se vuelve a llamar si el nombre no es válido
    } else {
        // Se llama a la siguiente función después de que el nombre sea válido
        pedirValorDolar();
    }
}

function pedirValorDolar() {
    valorDolar = prompt(
        "Ingrese el valor en dolares, para convertir a Pesos Argentinos: "
    );
    if (!validarValorDolar(valorDolar)) {
        alert("El valor del dólar solo debe contener números. Intente nuevamente.");
        pedirValorDolar(); // Se vuelve a llamar si el valor del dólar no es válido
    } else{
        // Se llama a la siguiente función después de que el valor del dólar sea válido
        mostrarResultado();
    }
}

window.onload = function () {
    setTimeout(() => {
        mostrarPrompt("-CONVERSOR DE MONEDAS-\nIngrese su nombre: ");
    }, 4000);
};

function mostrarResultado() {
    var cotizacionEnPesoArg = 858.55;
    var valorEnPesos = valorDolar * cotizacionEnPesoArg;
    valorEnPesos = valorEnPesos.toFixed(2);
        alert(
            nombreUsuario + ", el valor en Pesos Argentinos es de: $. " + valorEnPesos)
        alert("MUCHAS GRACIAS POR UTILIZAR NUESTRO CONVERSOR DE MONEDAS");
}