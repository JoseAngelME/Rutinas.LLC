const procesarBtn = document.getElementById('cargarDatos');

    // Añadimos un evento al hacer click en el botón Procesar
    procesarBtn.addEventListener('click', () => {
        // Obtenemos los valores de los campos visibles
        const peso = document.getElementById('peso').textContent;
        const altura = document.getElementById('altura').textContent;
        const gen = document.getElementById('gen').textContent;
        const dias = document.getElementById('dias').textContent;
        const rutina = document.getElementById('rutina');
        alert(rutina.value);

        // Opcionalmente, mostrar los valores en la consola para verificar
    });