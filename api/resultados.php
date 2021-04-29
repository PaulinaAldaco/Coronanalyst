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
        'plataformas' => [
            "Mercado Libre" => 0,
            "Amazon"=> 0,
            "Facebook Marketplace" => 0,
            "Alibaba / Aliexpress"=> 0,
            "eBay"=> 0,
            "E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)" => 0
        ],
        'seguido' => [
            "Más de 10 veces por mes" => 0,
            "10 a 6 veces al mes" => 0,
            "5 a 1 vez al mes" => 0,
            "1 vez cada varios meses" => 0,
            "No realizo compras en línea" => 0
        ]
    ];

    $arrayRespuestas = [
        'plataformas' => [
            ["Plataformas", "uno"]
        ],
        'seguido' => [
            ["Seguido", "uno"]
        ] 
    ];

    try {

        $query = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=1 GROUP BY respuesta ";
        $result = $conn->query($query);

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $respuestas['seguido'][$row['respuesta']] = (int)$row['number'];
        }

        foreach (array_keys($respuestas['seguido']) as $key){
            array_push($arrayRespuestas['seguido'], [$key, $respuestas['seguido'][$key]]);
        }

        $query2 = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=2 GROUP BY respuesta ";
        $result2 = $conn->query($query2);

        while ($row = $result2->fetch(PDO::FETCH_ASSOC)) {
            $respuestas['plataformas'][$row['respuesta']] = (int)$row['number'];
        }

        foreach (array_keys($respuestas['plataformas']) as $key){
            array_push($arrayRespuestas['plataformas'], [$key, $respuestas['plataformas'][$key]]);
        }


        $returnData =
            [
                "success" => 1,
                "status" => 201,
                "respuestas" => $arrayRespuestas
            ];
    } catch (PDOException $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }

endif;

echo json_encode($returnData);
