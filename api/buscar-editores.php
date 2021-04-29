<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
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

            $select_editors = "SELECT correo FROM usuarios WHERE tipo_usuario='editor'";
            $editors = $conn->query($select_editors);

                $rows = array();
                while($row = $editors->fetchColumn()) {
                    $rows[] = $row;
                }

                $returnData =
                [
                    "success" => 1,
                    "status" => 201,
                    "editors" => $rows
                ]; 
                
            

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    
endif;

echo json_encode($returnData);
