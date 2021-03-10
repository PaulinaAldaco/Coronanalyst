<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db_name = "coronanalyst";

    // Crear conexión
    $conn = new mysqli($servername, $username, $password, $db_name);

    // Verificar
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    } 
    echo "Conexión exitosa<br>";

    $sql1 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["confianza"]) . "')";
    $sql2 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["compra"]) . "')";
    $sql3 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["compra2019"]) . "')";
    $sql4 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["compra2020"]) . "')";
    $sql5 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["plataforma"]) . "')";
    $sql6 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["categoria"]) . "')";

    if ($conn->query($sql1) === TRUE) {
      echo "Registro 1 agregado";
    } else {
      echo "Error: " . $sql1 . "<br>" . $conn->error;
    }

    if ($conn->query($sql2) === TRUE) {
      echo "Registro 2 agregado";
    } else {
      echo "Error: " . $sql2 . "<br>" . $conn->error;
    }

    if ($conn->query($sql3) === TRUE) {
      echo "Registro 3 agregado";
    } else {
      echo "Error: " . $sq3 . "<br>" . $conn->error;
    }

    if ($conn->query($sql4) === TRUE) {
      echo "Registro 4 agregado";
    } else {
      echo "Error: " . $sql4 . "<br>" . $conn->error;
    }

    if ($conn->query($sql5) === TRUE) {
      echo "Registro 5 agregado";
    } else {
      echo "Error: " . $sql5 . "<br>" . $conn->error;
    }

    if ($conn->query($sql6) === TRUE) {
      echo "Registro 6 agregado";
    } else {
      echo "Error: " . $sql6 . "<br>" . $conn->error;
    }

    $conn->close();

?>