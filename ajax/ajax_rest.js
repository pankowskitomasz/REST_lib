"use strict";
var DATA_LINK = "http://localhost/dev/ajax/data.php";
var httpRequest;
//------------------------------------------------------------
if("XMLHttpRequest" in window){
    httpRequest = new XMLHttpRequest();
}
else{
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");            
}
//------------------------------------------------------------
function processStateChange(){
    if(this.status==200 && this.readyState==4){
        console.log(this.responseText);
    }
}
//------------------------------------------------------------
function getRequest(requestA,linkA,dataA){
    requestA.open("GET",linkA+"?"+dataA+"?"+dataA,true);
    requestA.send();
}
//------------------------------------------------------------
function postRequest(requestA,linkA,dataA){            
    requestA.open("POST",linkA,true);
    requestA.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    requestA.send(dataA);
}
//------------------------------------------------------------
function postJSONRequest(requestA,linkA,dataA){            
    requestA.open("POST",linkA,true);
    requestA.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    requestA.send(JSON.stringify(dataA));
}
//------------------------------------------------------------
function putRequest(requestA,linkA,dataA){           
    requestA.open("PUT",linkA,true);
    requestA.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    requestA.send(dataA);
}
//------------------------------------------------------------
function putJSONRequest(requestA,linkA,dataA){           
    requestA.open("PUT",linkA,true);
    requestA.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    requestA.send(JSON.stringify(dataA));
}
//------------------------------------------------------------
function deleteRequest(requestA,linkA,dataA){           
    requestA.open("DELETE",linkA,true);
    requestA.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    requestA.send(dataA);
}
//------------------------------------------------------------
httpRequest.onreadystatechange = processStateChange;

//GET + Params
//getRequest(httpRequest,DATA_LINK,"data=12"); 

//POST + Params
//postRequest(httpRequest,DATA_LINK,"data=12"); 

//POST + JSON (w/o CORS)
//postJSONRequest(httpRequest,DATA_LINK,{name:"John",last:"Smith"}); 

//PUT + Params
//putRequest(httpRequest,DATA_LINK,"data=12"); 

//PUT + JSON (w/o CORS)
//putJSONRequest(httpRequest,DATA_LINK,{name:"John",last:"Smith"}); 

//DELETE + Params
//deleteRequest(httpRequest,DATA_LINK,"data=12"); 