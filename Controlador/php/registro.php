<?php
header("Access-Control-Allow-Origin: http://localhost/Rutinas.LLC/Controlador/*");

// Métodos permitidos (GET, POST, etc.)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Cabeceras permitidas
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Procesar petición POST y obtener datos de la API
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // URL de la API con los datos de los ejercicios
    $url = "http://localhost/Rutinas.LLC/API/ejercicios.json";
    $entrada = file_get_contents("php://input");
    $datos = json_decode($entrada, true);
    if($datos)
        echo "Hola";
}
?>