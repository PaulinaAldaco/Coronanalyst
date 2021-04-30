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
            "Más de 10 veces por mes." => 0,
            "6 a 10 veces al mes." => 0,
            "5 a 1 vez al mes" => 0,
            "1 vez cada varios meses" => 0,
            "No realizo compras en línea" => 0
        ],

        'seguidoDespues' => [
            "Más de 10 veces por mes." => 0,
            "6 a 10 veces al mes." => 0,
            "5 a 1 vez al mes" => 0,
            "1 vez cada varios meses" => 0,
            "No realizo compras en línea" => 0
        ],

        'categoria' => [
            "Ropa" => 0,
            "Comida a domicilio (Rappi, UberEats, etc)" => 0,
            "Super a domicilio (víveres)" => 0,
            "Muebles y/o electrodomésticos" => 0,
            "Coleccionables" => 0,
            "Libros (físicos o electrónicos)" => 0,
            "Computadoras y/o electrónicos" => 0,
            "Herramientas y ferretería" => 0,
            "Entretenimiento (música, tv, videojuegos, juguetes, etc.)" => 0,
            "Programas o aplicaciones" => 0,
            "Reservaciones y boletos" => 0,
            "Artículos de higiene" => 0,
            "Artículos deportivos" => 0,
            "Otros" => 0,
            "Sigo sin realizar compras en línea" => 0
        ],

        'categoriaCompra' => [
            "Ropa" => 0,
            "Comida a domicilio (Rappi, UberEats, etc)" => 0,
            "Super a domicilio (víveres)" => 0,
            "Muebles y/o electrodomésticos" => 0,
            "Coleccionables" => 0,
            "Libros (físicos o electrónicos)" => 0,
            "Computadoras y/o electrónicos" => 0,
            "Herramientas y ferretería" => 0,
            "Entretenimiento (música, tv, videojuegos, juguetes, etc.)" => 0,
            "Programas o aplicaciones" => 0,
            "Reservaciones y boletos" => 0,
            "Artículos de higiene" => 0,
            "Artículos deportivos" => 0,
            "Otros" => 0,
            "Sigo sin realizar compras en línea" => 0
        ]



    ];

    $arrayRespuestas = [
        'plataformas' => [
            ["Plataformas", "uno"]
        ],
        'seguido' => [
            [
                'Temporada',
                'Antes de la pandemia',
                'Después de la pandemia',
            ]   
            ],
        'categoria' => [
            [
                'Temporada',
                'Antes de la pandemia',
                'Después de la pandemia',
            ]
        ]

    ];

    try {

        $query_seguido = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=1 GROUP BY respuesta ";
        $result_seguido = $conn->query($query_seguido);

        $query_seguidoD = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=6 GROUP BY respuesta ";
        $result_seguidoD = $conn->query($query_seguidoD);
    
        while ($row = $result_seguido->fetch(PDO::FETCH_ASSOC)) {
            $key = $row['respuesta'];
            $respuestas['seguido'][$key] = (int)$row['number'];
        }

        while ($row = $result_seguidoD->fetch(PDO::FETCH_ASSOC)) {
            $key = $row['respuesta'];
            $respuestas['seguidoDespues'][$key] = (int)$row['number'];
        }

        foreach (array_keys($respuestas['seguido']) as $key){
            array_push($arrayRespuestas['seguido'], [$key, $respuestas['seguido'][$key], $respuestas['seguidoDespues'][$key] ]);
        }

        $query_seguidoD = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=4 GROUP BY respuesta ";
        $result_seguidoD = $conn->query($query_seguidoD);

        $query_seguidoD = "SELECT respuesta, count(*) as number FROM respuestas WHERE ID_pregunta=9 GROUP BY respuesta ";
        $result_seguidoD = $conn->query($query_seguidoD);

        while ($row = $result_seguido->fetch(PDO::FETCH_ASSOC)) {
            $key = $row['respuesta'];
            $respuestas['categoria'][$key] = (int)$row['number'];
        }

        while ($row = $result_seguido->fetch(PDO::FETCH_ASSOC)) {
            $key = $row['respuesta'];
            $respuestas['categoriaCompra'][$key] = (int)$row['number'];
        }

        foreach (array_keys($respuestas['categoria']) as $key){
            array_push($arrayRespuestas['categoria'], [$key, $respuestas['categoria'][$key], $respuestas['categoriaCompra'][$key] ]);
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