enviarFormulario();
function enviarFormulario(){
    document.querySelector("form")
    .addEventListener("submit", e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        let ajax = new XMLHttpRequest(); 
        ajax.open("POST", "http://localhost/Rutinas.LLC/Controlador/php/registro.php", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.onload = () => {
            if (ajax.status === 200) {
                document.getElementById("verificar").style.display = "flex";
            } else {
                alert(ajax.statusText);
            }
        }
        ajax.send(JSON.stringify(data));  // Convertir los datos a JSON y enviarlos al controlador PHP.  //
        // Limpiar los campos del formulario
        e.target.reset();
    });

    enviarVerificacion();
}
function enviarVerificacion() {
    let enviarBtn = document.getElementById("enviar");
    
    // Evitar múltiples registros del evento
    enviarBtn.removeEventListener("click", controlarEnviarClick); // Elimina un posible registro anterior
    enviarBtn.addEventListener("click", controlarEnviarClick);
}

function controlarEnviarClick() {
    let codigo = document.getElementById("codigo").value;

    // Verificar que el código no esté vacío
    if (!codigo.trim()) {
        alert("Por favor, ingresa un código válido.");
        return;
    }

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "http://localhost/Rutinas.LLC/Controlador/php/verificacion.php", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    
    ajax.onload = () => {
        if (ajax.status === 200) {
            document.getElementById("verificar").style.display = "none";

            if (ajax.responseText == true) {
                document.getElementById("ir").style.display = "flex";
            } else {
                alert("Código incorrecto o no válido.");
            }
            
            // Limpiar el campo de texto después de procesar
            document.getElementById("codigo").value = "";
        } else {
            alert(`Error: ${ajax.statusText}`);
        }
    };

    // Convertir los datos a JSON y enviarlos al controlador PHP.
    ajax.send(JSON.stringify({ codigo: codigo }));
}

