<?php
    header("Access-Control-Allow-Origin: http://localhost/Rutinas.LLC/Controlador/*");

    // Métodos permitidos (GET, POST, etc.)
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    
    // Cabeceras permitidas
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    
    // Procesar petición POST y obtener datos de la API
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $cod = 1234;
        $entrada = file_get_contents("php://input");
        $datos = json_decode($entrada, true);
        $codigo = $datos['codigo'];
        if($codigo == $cod){
            echo true;
        }else{
            echo false;
        }

    }
?>