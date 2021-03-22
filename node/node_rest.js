//includes
const http = require("http");
//------------------------------------------------------
//configuration
const PARAMS = {
    port: 8081,
    hostname: "localhost"
};
const ORIGIN_URL = "http://localhost";
//------------------------------------------------------
http.createServer(function(req,res){
    res.writeHead(200,{
        "Access-Control-Allow-Origin":ORIGIN_URL,
        "Access-Control-Allow-Methods":"OPTIONS,PUT,GET,POST,DELETE",
        "Access-Control-Request-Headers":"content-type, x-requested-with"
    });
    if(req.method==="GET"){
        res.end("GET: "+req.url);
    }
    else if(req.method==="POST"){
        res.end("POST: "+req.url);
    }
    else if(req.method==="PUT"){
        res.end("PUT: "+req.url);
    }
    else if(req.method==="DELETE"){
        res.end("DELETE: "+req.url);
    }
    else{
        res.statusCode = 404;
        res.end();
    }
}).listen(PARAMS);
