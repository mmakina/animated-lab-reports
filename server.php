<?php

switch ($_SERVER['REQUEST_URI']) {
    case '/':
        # code...
            require_once "resources/views/index.view.php";
        break;
    
    default:
        # code...
        require_once "resources/views/selection.view.php";
        break;
}