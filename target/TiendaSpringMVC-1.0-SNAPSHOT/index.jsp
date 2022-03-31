<%-- 
    Document   : index
    Created on : 31 mar 2022, 12:41:36
    Author     : gillera
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="js/main.js" type="module"></script>
    </head>
    <body>
        <form id="login" class="login-form">
            <input type="text" placeholder="Correo" id="login-email">
            <input type="password" placeholder="Contraseña" id="login-pwd">
            <input type="submit" value="Iniciar sesion" class="btn btn-logIn">
            <input type="submit" value="Registrarse" class="btn btn-singIn">
        </form>
    </body>
</html>
