<?php
header("Access-Control-Allow-Origin: http://localhost/Rutinas.LLC/*");

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

    // Validar los datos y obtener los grupos de ejercicios correspondientes
    if ($datos) {
        // Obtener los grupos de ejercicios de la API
        $data = file_get_contents($url);
        //decodificar los datos de la API
        $datosApi = json_decode($data, true);
        //Crear un array con los grupos de ejercicios de la API
        $grupos = [
            0 => $datosApi['ejercicios'][0]['Brazo'],
            1 => $datosApi['ejercicios'][0]['Hombro'],
            2 => $datosApi['ejercicios'][0]['Pectoral'],
            3 => $datosApi['ejercicios'][0]['Espalda'],
            4 => $datosApi['ejercicios'][0]['Abdomen'],
            5 => $datosApi['ejercicios'][0]['Pierna'],
            6 => $datosApi['ejercicios'][0]['Gluteo'],
            7 => $datosApi['ejercicios'][0]['Flexibilidad'],
            8 => $datosApi['ejercicios'][0]['Resistencia/cardio']
        ];

        //Obtener el valor enviado como petición
        $tipo = $datos['valor'];
        //verifica si el valor esta en el grupo de datos y lo aisgna como la respuesta
        if (array_key_exists($tipo, $grupos)) {
            $respuesta = $grupos[$tipo];
        } else {
            //asignamos un error
            $respuesta = ["error" => "Tipo inválido."];
        }

        // Enviar la respuesta en formato JSON al cliente
        echo json_encode($respuesta);
    }
}
