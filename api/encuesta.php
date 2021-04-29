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
    $id_user = (int) trim($data->id_user);


    $checkboxes = [
        'plataformas' => [json_decode($data->plataforma)],
        'pago' => [json_decode($data->pago)],
        'categoria' => [json_decode($data->categoria)],
        'plataformaPandemia' => [json_decode($data->plataformaPandemia)],
        'metodoPago' => [json_decode($data->metodoPago)],
        'categoriaCompra' => [json_decode($data->categoriaCompra)],
        'condicionesMedicas' => [json_decode($data->condicionesMedicas)],
        'situacionesPandemia' => [json_decode($data->situacionesPandemia)]
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
    
            foreach($checkboxes['plataformas'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 2, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['pago'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 3, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['categoria'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 4, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['plataformaPandemia'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 7, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['metodoPago'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 8, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['categoriaCompra'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 9, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['condicionesMedicas'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 14, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
                        $insert_stmt->execute();
                }
            }

            foreach($checkboxes['situacionesPandemia'] as $value){
                foreach($value as $valor){
                    $insert_query = "INSERT INTO respuestas (ID_usuario, ID_pregunta, respuesta) VALUES ($id_user, 15, :respuesta)";
                        $insert_stmt = $conn->prepare($insert_query);
                        $insert_stmt->bindValue(':respuesta', $valor,PDO::PARAM_STR);
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


            $insert_stmt1 = $conn->prepare($insert_query1);
            $insert_stmt5 = $conn->prepare($insert_query5);
            $insert_stmt6 = $conn->prepare($insert_query6);
            $insert_stmt10 = $conn->prepare($insert_query10);
            $insert_stmt11 = $conn->prepare($insert_query11);
            $insert_stmt12 = $conn->prepare($insert_query12);
            $insert_stmt13 = $conn->prepare($insert_query13);
            $insert_stmt16 = $conn->prepare($insert_query16);

            // DATA BINDING
            $insert_stmt1->bindValue(':compras', $compras,PDO::PARAM_STR);
            $insert_stmt5->bindValue(':tiempo', $tiempo,PDO::PARAM_STR);
            $insert_stmt6->bindValue(':seguido', $seguido,PDO::PARAM_STR);
            $insert_stmt10->bindValue(':tiempoComputadora', $tiempoComputadora,PDO::PARAM_STR);
            $insert_stmt11->bindValue(':dineroEnLinea', $dineroEnLinea,PDO::PARAM_STR);
            $insert_stmt12->bindValue(':fisicoLinea', $fisicoLinea,PDO::PARAM_STR);
            $insert_stmt13->bindValue(':sintomas', $sintomas,PDO::PARAM_STR);
            $insert_stmt16->bindValue(':actFisica', $actFisica,PDO::PARAM_STR);

            $insert_stmt1->execute();
            $insert_stmt5->execute();
            $insert_stmt6->execute();
            $insert_stmt10->execute();
            $insert_stmt11->execute();
            $insert_stmt12->execute();
            $insert_stmt13->execute();
            $insert_stmt16->execute();

            $surveyData = setSurvey($id_user,$conn);
            if($surveyData['success']){
                $returnData = msg(1,201,'You have successfully answered the survey.');
            }
            else{
                $returnData = msg(1,201,$surveyData['message']);
            }
        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }

    
endif;

function setSurvey($id,$conn){
    try{

        $update_query = "UPDATE usuarios SET encuesta=1 WHERE ID_usuario=:id";

        $update_stmt = $conn->prepare($update_query);

        // DATA BINDING
        $update_stmt->bindValue(':id', $id,PDO::PARAM_INT);
        $update_stmt->execute();

        $returnData = msg(1,201,'Usuario actualizado');

    }
    catch(PDOException $e){
        $returnData = msg(0,500,$e->getMessage());
    }
    return $returnData;
}

echo json_encode($returnData);