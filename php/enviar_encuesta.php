<?php
    // Para la conexion
    include_once 'conexion_respuestas.php';

    $sql1 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["confianza"]) . "')";
    $sql2 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["compra"]) . "')";
    $sql3 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["compra2019"]) . "')";
    $sql4 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . htmlspecialchars($_GET["compra2020"]) . "')";
    $sql5 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . implode(",",$_GET["plataforma"] . "')";
    $sql6 = "INSERT INTO Respuestas (ID_pregunta, ID_usuario, respuesta) VALUES (1,1,'" . implode(",",$_GET["categoria"] . "')";

    if ($conn->query($sql1) === TRUE) {
      echo "Confianza: ". htmlspecialchars($_GET["confianza"]) . "<br>";
    } else {
      echo "Error: " . $sql1 . "<br>" . $conn->error;
    }

    if ($conn->query($sql2) === TRUE) {
      echo "Compra: ". htmlspecialchars($_GET["compra"]) . "<br>";
    } else {
      echo "Error: " . $sql2 . "<br>" . $conn->error;
    }

    if ($conn->query($sql3) === TRUE) {
      echo "Compra 2019: ". htmlspecialchars($_GET["compra2019"]) . "<br>";
    } else {
      echo "Error: " . $sq3 . "<br>" . $conn->error;
    }

    if ($conn->query($sql4) === TRUE) {
      echo "Compra 2020: ". htmlspecialchars($_GET["compra2020"]) . "<br>";
    } else {
      echo "Error: " . $sql4 . "<br>" . $conn->error;
    }

    if ($conn->query($sql5) === TRUE) {
      echo "Plataformas: ". implode(",",$_GET["plataforma"] . "<br>";
    } else {
      echo "Error: " . $sql5 . "<br>" . $conn->error;
    }

    if ($conn->query($sql6) === TRUE) {
      echo "Categorias: ". implode(",",$_GET["plataforma"] . "<br>";
    } else {
      echo "Error: " . $sql6 . "<br>" . $conn->error;
    }

    $conn->close();

?>