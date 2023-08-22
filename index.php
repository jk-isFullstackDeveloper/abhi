<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: *");
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            $data = ['status' => 200, 'data' => $user];
            echo json_encode($data);
            break;
}

?>