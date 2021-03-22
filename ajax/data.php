<?php

header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");


function getInputData(){    
    $input = fopen('php://input', r);
    $data = stream_get_contents($input);
    fclose($input);
    return $data;
}

function getJSONInputData(){    
    $input = fopen('php://input', r);
    $data = json_decode(stream_get_contents($input));
    fclose($input);
    return $data;
}
if($_SERVER['REQUEST_METHOD']==="GET"){
    print_r($_GET);
}
else if($_SERVER['REQUEST_METHOD']==='POST'){
    if($_SERVER['CONTENT_TYPE']==="application/x-www-form-urlencoded"){
        print_r($_POST);
    }   
    else{
        print_r(getJSONInputData());
    }
}
else if($_SERVER['REQUEST_METHOD']==='PUT'){
    print_r(getInputData());
}
else if($_SERVER['REQUEST_METHOD']==='DELETE'){
    print_r(getInputData());
}
else{
    http_response_code(404);
}



?>