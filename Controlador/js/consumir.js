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
                    //const contenedor = document.getElementById("cAPI");
                    //contenedor.appendChild(ajax.responseText);

                    ajax.response.forEach(element => {
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

                        imagenE.src = element.img;
                        parrafoNom.textContent = element.nombre;
                        parrafoDesc.textContent = element.desc;
                        parrafoRep.textContent = element.rep;

                        ejercicioDiv.appendChild(imagenE);
                        ejercicioDiv.appendChild(parrafoNom); 
                        ejercicioDiv.appendChild(parrafoDesc);
                        ejercicioDiv.appendChild(parrafoRep);
                        ejercicios.appendChild(ejercicioDiv);
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
