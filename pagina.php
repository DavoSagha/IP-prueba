<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/7ebf4ead7c.js" crossorigin="anonymous"></script>    <title>Lista toDo</title>
</head>
<body>
    <?php 
    $file_with_ips = 'ip.json';
    $ips = file_get_contents($file_with_ips);
    $contenido = json_decode($ips, true);

    if(isset($_GET["mostrar"])){
        echo "<p>IP :<b>".$contenido[$_GET["k"]] ."</b></p>";
    }
    else{
        $contenido[$_GET["k"]] = $_SERVER["REMOTE_ADDR"];
        file_put_contents($file_with_ips, json_encode($contenido));
    }
    ?>


    <div class="container">
        
        <div class="perfil">
        <div id="fecha">19/10</div>
        <h1>Bienvenido a toDo list.</h1>
        </div>


        <div class="agregar-tarea">
            <input type="text" id="input"  placeholder="agregue una tarea" />
            <i  id= "enter" class="fas fa-plus-circle" placeholder="agrga" src="agregar.svg" ></i>
        </div>


        <div class="tareas">
            <h3>Tareas pendientes</h3>
            <ul id="lista">
                 <li>
                  <i class="fas fa-circle co" data="realizado" id="0"></i>
                  <p class="text ">estudiar react</p>
                  <i class="fas fa-trash de" data="eliminado" id="0"></i>  
                </li> 
            </ul>
        </div>
    </div>
