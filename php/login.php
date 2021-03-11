<?php
if($_POST){
   $correo=$_POST['email'];
   $contra=$_POST['contra'];
   
   
   $servername = "localhost";
   $username = "root";
   $password = "";
   $db="test";
   
   $conexion = new mysqli($servername, $username, $password,$db);
   if ($conexion->connect_error) {
       die("error de conexión: " . $conexion->connect_error);
   }
   
   $sql = "SELECT ID_usuario, contra, correo from Usuarios where correo='$correo' and contra='$contra' ";
   $resultado = $conexion->query($sql);
   
   if ($resultado->num_rows > 0) {
       while($row = $resultado->fetch_assoc()) {
         session_start();
         $_SESSION['logueado'] = TRUE;
         $_SESSION['usuario'] = $row['correo'];

         header('Location: index.html');
     }
   } else {

    if($_COOKIE["gfg"] == "valid"){
      echo "<center><div><p style='color:#FF0000';>Usuario o contraseña incorrecto, intentalo de nuevo.<br><a href=login.html>Ir a inicio de sesión.</a></p></div></center>";
    }else{
      header('Location: login.html');
    }
    
   }
   
   $conexion->close();
   }
   
   
?>