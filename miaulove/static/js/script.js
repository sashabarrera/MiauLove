console.log("Conexion correcta");

// cambio de color en los botones de categoria
let botonesCategoria = document.querySelectorAll(".boton-categoria");

botonesCategoria.forEach(function(boton) {
    boton.addEventListener("click", function() {
        botonesCategoria.forEach(function(cadaBoton) {
            cadaBoton.classList.remove("activo");
        });
        this.classList.add("activo");
    });
});

// sumar me gusta en los corazones
let botonesCorazon = document.querySelectorAll(".boton-corazon");

botonesCorazon.forEach(function(boton) {
    boton.addEventListener("click", function() {
        let contadorSpan = this.querySelector(".contador");
        if (contadorSpan) {
            let cantidadActual = parseInt(contadorSpan.textContent);
            contadorSpan.textContent = cantidadActual + 1;
        }
    });
});

// alerta de cerrar sesion
let btnCerrarSesion = document.querySelector(".boton-cerrar");

if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", function() {
        alert("Has cerrado sesión exitosamente");
    });
}