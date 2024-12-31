const select = document.getElementById('ejercicios');


document.addEventListener('DOMContentLoaded', () => {

    select.addEventListener('change', () => {
        let ejercicios = document.getElementById("cAPI");
        ejercicios.textContent = "";
        let ajax = new XMLHttpRequest();
        ajax.open("POST", "http://localhost/Rutinas.LLC/Controlador/php/ejercicio.php", true);
        ajax.setRequestHeader("Content-Type", "application/json");

        let datos = {
            valor: select.value
        }
        ajax.responseType = "json";
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    ajax.response.forEach(objeto => {
                        crearCarta(objeto, ejercicios)
                    });
                }
            }
        }
        ajax.onerror = () => {
            alert("Hubo un error en la petición.");
        }
        ajax.send(JSON.stringify(datos));
    });
});

function crearCarta(objeto, contenedor) {
    const ejercicioDiv = document.createElement('div');
    ejercicioDiv.className = 'card';
    ejercicioDiv.id = 'cartas';

    const imagenE = document.createElement('img');
    const parrafoNom = document.createElement('p');
    const parrafoDesc = document.createElement('p');
    const parrafoRep = document.createElement('p');

    imagenE.className = 'card-img-top';
    parrafoDesc.className = 'card-text';
    parrafoNom.className = 'card-title';
    parrafoRep.className = 'card-subtitle mb-2 text-muted';

    imagenE.src = objeto.img;
    parrafoNom.textContent = objeto.nombre;
    parrafoDesc.textContent = objeto.desc;
    parrafoRep.textContent = objeto.rep;

    ejercicioDiv.appendChild(imagenE);
    ejercicioDiv.appendChild(parrafoNom);
    ejercicioDiv.appendChild(parrafoDesc);
    ejercicioDiv.appendChild(parrafoRep);
    contenedor.appendChild(ejercicioDiv);
}