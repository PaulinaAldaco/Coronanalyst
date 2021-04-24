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

            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 1, :uno)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 2, :dos)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 3, :tres)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 4, :cuatro)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 5, :cinco)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 6, :seis)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 7, :siete)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 8, :ocho)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 9, :nueve)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 10, :diez)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 11, :once)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 12, :doce)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 14, :catorce)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 15, :quince)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 16, :diezseis)";
            $insert_query = "INSERT INTO Respuesta (ID_usuario, ID_pregunta, respuesta) VALUES(id_user, 17, :udiezsiete)";

            $insert_stmt = $conn->prepare($insert_query);

            // DATA BINDING
            $insert_stmt->bindValue(':compras', $uno,PDO::PARAM_STR);
            $insert_stmt->bindValue(':plataforma', $dos,PDO::PARAM_STR);
            $insert_stmt->bindValue(':pago', $tres,PDO::PARAM_STR);
            $insert_stmt->bindValue(':categoria', $cuatro,PDO::PARAM_STR);
            $insert_stmt->bindValue(':tiempo', $cinco,PDO::PARAM_STR);
            $insert_stmt->bindValue(':seguido', $seis,PDO::PARAM_STR);
            $insert_stmt->bindValue(':plataformaPandemia', $siete,PDO::PARAM_STR);
            $insert_stmt->bindValue(':metodoPago', $ocho,PDO::PARAM_STR);
            $insert_stmt->bindValue(':categoriaCompra', $nueve,PDO::PARAM_STR);
            $insert_stmt->bindValue(':tiempoComputadora', $diez,PDO::PARAM_STR);
            $insert_stmt->bindValue(':dineroEnLinea', $once,PDO::PARAM_STR);
            $insert_stmt->bindValue(':fisicoLinea', $doce,PDO::PARAM_STR);
            $insert_stmt->bindValue(':sintomas', $catorce,PDO::PARAM_STR);
            $insert_stmt->bindValue(':condicionesMedicas', $quince,PDO::PARAM_STR);
            $insert_stmt->bindValue(':situacionesPandemia', $diezseis,PDO::PARAM_STR);
            $insert_stmt->bindValue(':actFisica', $diezsiete,PDO::PARAM_STR);
            $insert_stmt->bindValue(':id_user', $id_user,PDO::PARAM_INT);
            $insert_stmt->execute();


            $returnData = msg(1,201,'You have successfully answered the survey.');

            

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }

    
endif;

echo json_encode($returnData);