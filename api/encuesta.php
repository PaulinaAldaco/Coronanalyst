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

// GET DATA FORM REQUEST 
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');
   
else:
    $compras = trim($data->compras);
    $tiempo = trim($data->tiempo);
    $seguido = trim($data->seguido);
    $tiempoComputadora = trim($data->tiempoComputadora);
    $dineroEnLinea = trim($data->dineroEnLinea);
    $fisicoLinea = trim($data->fisicoLinea);
    $sintomas = trim($data->sintomas);
    $actFisica = trim($data->actFisica);
    $id_user = (int)trim($data->id_user);

    $checkboxes = [
        'plataformas' => [trim($data->plataforma), 2],
        'pago' => [trim($data->pago), 3],
        'categoria' => [trim($data->categoria), 4],
        'plataformaPandemia' => [trim($data->plataformaPandemia), 7],
        'metodoPago' => [trim($data->metodoPago), 8],
        'categoriaCompra' => [trim($data->categoriaCompra), 9],
        'condicionesMedicas' => [trim($data->condicionesMedicas), 14],
        'situacionesPandemia' => [trim($data->situacionesPandemia), 15]
    ];

    $plataformas = trim($data->plataforma);
    $pago = trim($data->pago);
    $categoria = trim($data->categoria);
    $plataformaPandemia = trim($data->plataformaPandemia);
    $metodoPago= trim($data->metodoPago);
    $categoriaCompra = trim($data->categoriaCompra);
    $condicionesMedicas = trim($data->condicionesMedicas);
    $situacionesPandemia = trim($data->situacionesPandemia);


        try{

            foreach ($checkboxes as $checkbox) {
                foreach($checkbox as $value){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, :id_pregunta, :respuesta)";
                    $insert_stmt = $conn->prepare($insert_query);
                    $insert_stmt->bindValue(':respuesta', $value[0],PDO::PARAM_STR);
                    $insert_stmt->bindValue(':id_pregunta', $value[1],PDO::PARAM_INT);
                    $insert_stmt->execute();
                }
            }
            $insert_query1 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 1, :compras)";
            $insert_query5 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 5, :tiempo)";
            $insert_query6 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 6, :seguido)";
            $insert_query10 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 10, :tiempoComputadora)";
            $insert_query11 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 11, :dineroEnLinea)";
            $insert_query12 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 12, :fisicoLinea)";
            $insert_query13 = "INSERT INTO respuestas(ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 13, :sintomas)";
            $insert_query16 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 16, :actFisica)";

            // $insert_query2 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 2, :plataformas)";
            // $insert_query3 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 3, :pago)";
            // $insert_query4 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 4, :categoria)";
            // $insert_query7 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 7, :plataformaPandemia)";
            // $insert_query8 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 8, :metodoPago)";
            // $insert_query9 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 9, :categoriaCompra)";
            // $insert_query14 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 14, :condicionesMedicas)";
            // $insert_query15 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 15, :situacionesPandemia)";

            $insert_stmt1 = $conn->prepare($insert_query);
            $insert_stmt5 = $conn->prepare($insert_query5);
            $insert_stmt6 = $conn->prepare($insert_query6);
            $insert_stmt10 = $conn->prepare($insert_query10);
            $insert_stmt11 = $conn->prepare($insert_query11);
            $insert_stmt12 = $conn->prepare($insert_query12);
            $insert_stmt13 = $conn->prepare($insert_query13);
            $insert_stmt16 = $conn->prepare($insert_query16);

            // $insert_stmt2 = $conn->prepare($insert_query2);
            // $insert_stmt3 = $conn->prepare($insert_query3);
            // $insert_stmt4 = $conn->prepare($insert_query4);
            // $insert_stmt7 = $conn->prepare($insert_query7);
            // $insert_stmt8 = $conn->prepare($insert_query8);
            // $insert_stmt9 = $conn->prepare($insert_query9);
            // $insert_stmt14 = $conn->prepare($insert_query14);
            // $insert_stmt15 = $conn->prepare($insert_query15);

            // DATA BINDING
            $insert_stmt1->bindValue(':compras', $compras,PDO::PARAM_STR);
            $insert_stmt5->bindValue(':tiempo', $tiempo,PDO::PARAM_STR);
            $insert_stmt6->bindValue(':seguido', $seguido,PDO::PARAM_STR);
            $insert_stmt10->bindValue(':tiempoComputadora', $tiempoComputadora,PDO::PARAM_STR);
            $insert_stmt11->bindValue(':dineroEnLinea', $dineroEnLinea,PDO::PARAM_STR);
            $insert_stmt12->bindValue(':fisicoLinea', $fisicoLinea,PDO::PARAM_STR);
            $insert_stmt13->bindValue(':sintomas', $sintomas,PDO::PARAM_STR);
            $insert_stmt16->bindValue(':actFisica', $actFisica,PDO::PARAM_STR);

            // $insert_stmt2->bindValue(':plataformas', $plataformas,PDO::PARAM_STR);
            // $insert_stmt3->bindValue(':pago', $pago,PDO::PARAM_STR);
            // $insert_stmt4->bindValue(':categoria', $categoria,PDO::PARAM_STR);
            // $insert_stmt7->bindValue(':plataformaPandemia', $plataformaPandemia,PDO::PARAM_STR);
            // $insert_stmt8->bindValue(':metodoPago', $metodoPago,PDO::PARAM_STR);
            // $insert_stmt9->bindValue(':categoriaCompra', $categoriaCompra,PDO::PARAM_STR);
            // $insert_stmt14->bindValue(':condicionesMedicas', $condicionesMedicas,PDO::PARAM_STR);
            // $insert_stmt15->bindValue(':situacionesPandemia', $situacionesPandemia,PDO::PARAM_STR);


            // $insert_stmt2->execute();
            // $insert_stmt3->execute();
            // $insert_stmt4->execute();
            // $insert_stmt7->execute();
            // $insert_stmt8->execute();
            // $insert_stmt9->execute();
            // $insert_stmt14->execute();
            // $insert_stmt15->execute();

            $insert_stmt->execute();
            $insert_stmt5->execute();
            $insert_stmt6->execute();
            $insert_stmt10->execute();
            $insert_stmt11->execute();
            $insert_stmt12->execute();
            $insert_stmt13->execute();
            $insert_stmt16->execute();


            $returnData = msg(1,201,'You have successfully answered the survey.');
        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }

    
endif;

echo json_encode($returnData);