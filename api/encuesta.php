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
    $uno = trim($data->compras);
    $dos = trim($data->plataforma);
    $tres = trim($data->pago);
    $cuatro = trim($data->categoria);
    $cinco = trim($data->tiempo);
    $seis = trim($data->seguido);
    $siete = trim($data->plataformaPandemia);
    $ocho= trim($data->metodoPago);
    $nueve = trim($data->categoriaCompra);
    $diez = trim($data->tiempoComputadora);
    $once = trim($data->dineroEnLinea);
    $doce = trim($data->fisicoLinea);
    $catorce = trim($data->sintomas);
    $quince = trim($data->condicionesMedicas);
    $diezseis = trim($data->situacionesPandemia);
    $diezsiete = trim($data->actFisica);
    $id_user = trim($data->id_user);

        try{

            $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 1, :uno)";
            $insert_query2 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 2, :dos)";
            $insert_query3 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 3, :tres)";
            $insert_query4 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 4, :cuatro)";
            $insert_query5 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 5, :cinco)";
            $insert_query6 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 6, :seis)";
            $insert_query7 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 7, :siete)";
            $insert_query8 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 8, :ocho)";
            $insert_query9 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 9, :nueve)";
            $insert_query10 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 10, :diez)";
            $insert_query11 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 11, :once)";
            $insert_query12 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 12, :doce)";
            $insert_query13 = "INSERT INTO respuestas(ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 13, :catorce)";
            $insert_query14 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 14, :quince)";
            $insert_query15 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 15, :diezseis)";
            $insert_query16 = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES($id_user, 16, :diezsiete)";

            $insert_stmt = $conn->prepare($insert_query);
            $insert_stmt2 = $conn->prepare($insert_query2);
            $insert_stmt3 = $conn->prepare($insert_query3);
            $insert_stmt4 = $conn->prepare($insert_query4);
            $insert_stmt5 = $conn->prepare($insert_query5);
            $insert_stmt6 = $conn->prepare($insert_query6);
            $insert_stmt7 = $conn->prepare($insert_query7);
            $insert_stmt8 = $conn->prepare($insert_query8);
            $insert_stmt9 = $conn->prepare($insert_query9);
            $insert_stmt10 = $conn->prepare($insert_query10);
            $insert_stmt11 = $conn->prepare($insert_query11);
            $insert_stmt12 = $conn->prepare($insert_query12);
            $insert_stmt13 = $conn->prepare($insert_query13);
            $insert_stmt14 = $conn->prepare($insert_query14);
            $insert_stmt15 = $conn->prepare($insert_query15);
            $insert_stmt16 = $conn->prepare($insert_query16);

            // DATA BINDING
            $insert_stmt->bindValue(':uno', $uno,PDO::PARAM_STR);
            $insert_stmt2->bindValue(':dos', $dos,PDO::PARAM_STR);
            $insert_stmt3->bindValue(':tres', $tres,PDO::PARAM_STR);
            $insert_stmt4->bindValue(':cuatro', $cuatro,PDO::PARAM_STR);
            $insert_stmt5->bindValue(':cinco', $cinco,PDO::PARAM_STR);
            $insert_stmt6->bindValue(':seis', $seis,PDO::PARAM_STR);
            $insert_stmt7->bindValue(':siete', $siete,PDO::PARAM_STR);
            $insert_stmt8->bindValue(':ocho', $ocho,PDO::PARAM_STR);
            $insert_stmt9->bindValue(':nueve', $nueve,PDO::PARAM_STR);
            $insert_stmt10->bindValue(':diez', $diez,PDO::PARAM_STR);
            $insert_stmt11->bindValue(':once', $once,PDO::PARAM_STR);
            $insert_stmt12->bindValue(':doce', $doce,PDO::PARAM_STR);
            $insert_stmt13->bindValue(':catorce', $catorce,PDO::PARAM_STR);
            $insert_stmt14->bindValue(':quince', $quince,PDO::PARAM_STR);
            $insert_stmt15->bindValue(':diezseis', $diezseis,PDO::PARAM_STR);
            $insert_stmt16->bindValue(':diezsiete', $diezsiete,PDO::PARAM_STR);

            $insert_stmt->execute();
            $insert_stmt2->execute();
            $insert_stmt3->execute();
            $insert_stmt4->execute();
            $insert_stmt5->execute();
            $insert_stmt6->execute();
            $insert_stmt7->execute();
            $insert_stmt8->execute();
            $insert_stmt9->execute();
            $insert_stmt10->execute();
            $insert_stmt11->execute();
            $insert_stmt12->execute();
            $insert_stmt13->execute();
            $insert_stmt14->execute();
            $insert_stmt15->execute();
            $insert_stmt16->execute();


            $returnData = msg(1,201,'You have successfully answered the survey.');

            

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }

    
endif;

echo json_encode($returnData);