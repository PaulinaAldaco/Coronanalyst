<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__.'/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();



if($_SERVER["REQUEST_METHOD"] != "GET"):
     $returnData = msg(0,404,'Page Not Found!');

else:
   
        try{

            $select_usuarios = "SELECT count(*) FROM Usuarios WHERE tipo_usuario='general'";
            $select_encuesta = "SELECT count(*) FROM Usuarios WHERE tipo_usuario='general' AND encuesta=1";

            $numero_usuarios = $conn->query($select_usuarios);
            $numero_encuesta = $conn->query($select_encuesta);

            $no_usuarios = $numero_usuarios->fetchColumn();
            $no_encuesta = $numero_encuesta->fetchColumn();


            $returnData =
            [
                "no_usuarios" => $no_usuarios,
                "no_encuesta" => $no_encuesta,
            ]; 
                

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    
endif;

$conn->close(); 

echo json_encode($returnData);