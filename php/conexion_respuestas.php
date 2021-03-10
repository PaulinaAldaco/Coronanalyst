<?php
    // Database credentials
    $servername = "den1.mysql4.gear.host";
    $username   = "coronanalystdb";
    $password   = "Bx62?_Qbte5H";
    $dbname     = "coronanalystdb";
    $tbname     = "respuestas";

    // Crear conexion a base
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
    
    // Verificar conexion
    if(!$conn){
        die('Error de conexión:' .mysql_error());
    }
    //echo "Conexión exitosa<br>";
?>