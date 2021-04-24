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
    
    // If user is set, check if user id is present in profile table
    if(isset($userIdData['user'])){
        $id = $userIdData['user'];
        // Get the user type
        $returnData = getUserType($conn,$id);
        // Continue if the type was retireved succesfully and the user is type general
        if(isset($returnData['type']) && $returnData['type']=="general"){
            // Check for user profile
            try {
                // Prepare, bind, and execute query
                $fetch_user_by_id = "SELECT * FROM datospersonales WHERE ID_usuario=:id";
                $query_stmt = $conn->prepare($fetch_user_by_id);
                $query_stmt->bindValue(':id', $id,PDO::PARAM_INT);
                $query_stmt->execute();
    
                // If user is found in profile table
                if($query_stmt->rowCount()):
                    $returnData = checkForSurvey($conn,$id);
                else:
                    $returnData = [
                        "success" => 1,
                        "status" => 200,
                        "user" => $id,
                        "type" => "genral",
                        "hasProfile" => 0,
                        "completedSurvey" => 0,
                        "message" => "User does not have a profile"
                    ];
                endif;
            }
            catch(PDOException $e){
                $returnData = [
                    "success" => 0,
                    "status" => 500,
                    "message" => "Error while checking for profile: ".$e->getMessage()
                ];
            }
        }

    }
}

// If user is registered and has profile, check if survey has been completed
function checkForSurvey($conn,$id){
    try{
        // Prepare, bind, and execute query
        $fetch_user_by_id = "SELECT * FROM respuestas WHERE ID_usuario=:id";
        $query_stmt = $conn->prepare($fetch_user_by_id);
        $query_stmt->bindValue(':id', $id,PDO::PARAM_INT);
        $query_stmt->execute();

        // If user is found in survey answer table
        if($query_stmt->rowCount()):
            $returnData = [
                "success" => 1,
                "status" => 200,
                "user" => $id,
                "type" => "general",
                "hasProfile" => 1,
                "completedSurvey" => 1,
                "message" => "User has a profile, has completed survey"
            ];
        else:
            $returnData = [
                "success" => 1,
                "status" => 200,
                "user" => $id,
                "type" => "general",
                "hasProfile" => 1,
                "completedSurvey" => 0,
                "message" => "User has a profile, has not completed survey"
            ];
        endif;
    }
    catch(PDOException $e){
        $returnData = [
            "success" => 0,
            "status" => 500,
            "message" => "Error while checking survey completion: ".$e->getMessage()
        ];
    }
    return $returnData;
}

function getUserType($conn,$id){
    try{
        // Prepare, bind, and execute query
        $fetch_user_by_id = "SELECT tipo_usuario FROM usuarios WHERE ID_usuario=:id";
        $query_stmt = $conn->prepare($fetch_user_by_id);
        $query_stmt->bindValue(':id', $id,PDO::PARAM_INT);
        $query_stmt->execute();

        $type = $query_stmt->fetchColumn();

        $returnData = [
            "success" => 1,
            "status" => 200,
            "user" => $id,
            "type" => $type
        ];
    }
    catch(PDOException $e){
        $returnData = [
            "success" => 0,
            "status" => 500,
            "message" => "Error while checking user type: ".$e->getMessage()
        ];
    }
    return $returnData;
}

echo json_encode($returnData);