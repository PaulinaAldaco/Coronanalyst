<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success, $status, $message, $extra = [])
{
    return array_merge([ 
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__ . '/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();



if ($_SERVER["REQUEST_METHOD"] != "GET") :
    $returnData = msg(0, 404, 'Page Not Found!');

else :

    $respuestas = [
        'seguido' => [],
        'plataformas' => []
    ];

    try{

        $query = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=1 GROUP BY respuesta ";
        $result = $conn->query($query);

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            array_push($respuestas['seguido'], [$row['respuesta'],  (int)$row['number']]);
        }

        $query2 = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=2 GROUP BY respuesta ";
        $result2 = $conn->query($query2);

        while ($row = $result2->fetch(PDO::FETCH_ASSOC)) {
            array_push($respuestas['plataformas'], [$row['respuesta'],  (int)$row['number']]);
        }


        $returnData =
            [
                "success" => 1,
                "status" => 201,
                "respuestas" => $respuestas
            ];

    } catch (PDOException $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }

endif;

echo json_encode($returnData);
