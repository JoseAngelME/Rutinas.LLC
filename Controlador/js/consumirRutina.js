const button = document.getElementById('procesar');

button.addEventListener('click', () => {
    const ruta = "../API/rutinas.json"; // Asegúrate de que la ruta sea correcta
    fetch(ruta)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const contenedor = document.getElementById('principal');
            contenedor.innerHTML = ''; // Limpiamos el contenedor antes de agregar nuevas tarjetas
            data.resistencia.routine.forEach(ejercicio => {
                const nom = ejercicio.ejercicio;
                const series = ejercicio.series;
                const reps = ejercicio.reps;
                const descanso = ejercicio.descanso;

                // Crear un div para cada ejercicio
                const ejercicioDiv = document.createElement('div');
                ejercicioDiv.className = 'card';
				ejercicioDiv.id = 'cartas';

                // Crear elementos de contenido
                const imagenE = document.createElement('img');
                const parrafoNom = document.createElement('p');
                const parrafoDesc = document.createElement('p');
                const parrafoRep = document.createElement('p');
                const parrafoDescanso = document.createElement('p');

                // Asignar valores a los elementos
                parrafoNom.textContent = `Ejercicio: ${nom}`;
                parrafoDesc.textContent = `Series: ${series}`;
                parrafoRep.textContent = `Repeticiones: ${reps}`;
                parrafoDescanso.textContent = `Descanso: ${descanso}`;

                // Asignar una imagen por defecto (puedes personalizar esto)
                const imgSrc = 'https://via.placeholder.com/150'; // Imagen por defecto
                imagenE.src = imgSrc;

                // Asignar clases para estilos
                imagenE.className = 'card-img-top';
                parrafoNom.className = 'card-title';
                parrafoDesc.className = 'card-text';
                parrafoRep.className = 'card-subtitle mb-2 text-muted';
                parrafoDescanso.className = 'card-subtitle mb-2 text-muted';

                // Agregar los elementos al div principal
                ejercicioDiv.appendChild(imagenE);
                ejercicioDiv.appendChild(parrafoNom);
                ejercicioDiv.appendChild(parrafoDesc);
                ejercicioDiv.appendChild(parrafoRep);
                ejercicioDiv.appendChild(parrafoDescanso);

                // Agregar el div del ejercicio al contenedor principal
                contenedor.appendChild(ejercicioDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
