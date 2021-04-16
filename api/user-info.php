<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__.'/classes/Database.php';
require __DIR__.'/middlewares/Auth.php';

$allHeaders = getallheaders();
$db_connection = new Database();
$conn = $db_connection->dbConnection();
$auth = new Auth($conn,$allHeaders);
 
$returnData = [
    "success" => 0,
    "status" => 401,
    "message" => "Unauthorized",
];

if($auth->isAuth()){
    $userIdData = $auth->isAuth();
    
    // If user is set, check if user id is present in table datospersonales
    if(isset($userIdData['user'])){
        $id = $userIdData['user'];
        try {
            // Prepare, bind, and execute query
            $fetch_user_by_id = "SELECT * FROM datospersonales WHERE ID_usuario=:id";
            $query_stmt = $conn->prepare($fetch_user_by_id);
            $query_stmt->bindValue(':id', $id,PDO::PARAM_INT);
            $query_stmt->execute();

            // If user is found
            if($query_stmt->rowCount()):
                $returnData = [
                    "success" => 1,
                    "status" => 200,
                    "user" => $id,
                    "hasProfile" => 1,
                    "message" => "User has a profile"
                ];
            else:
                $returnData = [
                    "success" => 1,
                    "status" => 200,
                    "user" => $id,
                    "hasProfile" => 0,
                    "message" => "User does not have a profile"
                ];
            endif;
        }
        catch(PDOException $e){
            $returnData = [
                "success" => 0,
                "status" => 500,
                "message" => $e->getMessage()
            ];
        }
    }
}

echo json_encode($returnData);