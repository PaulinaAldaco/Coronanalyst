<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
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

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];


if($_SERVER["REQUEST_METHOD"] != "DELETE"):
     $returnData = msg(0,404,'Pagina no encontrada!');

elseif((!isset($data->email) || ($data->email == "seleccione"))|| empty(trim($data->email))):
    $returnData = msg(0,422,'Por favor seleccione el correo a eliminar'); 
else:
        try{
            $correo = $data->email;
            $delete_editor = "DELETE FROM usuarios WHERE correo=:correo";
            $delete_stmt = $conn->prepare($delete_editor);
            $delete_stmt->bindValue(':correo', $correo,PDO::PARAM_STR);
            $delete_stmt->execute();
            
            $returnData = msg(1,201,'Se ha eliminado al editor exitosamente.');    
        
        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    
endif;

echo json_encode($returnData);