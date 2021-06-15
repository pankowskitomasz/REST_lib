"use strict";
var DATA_LINK = "http://localhost:8081";

//------------------------------------------------------------
function log(dataA){
    console.log(dataA);
}
//------------------------------------------------------------
function getRequest(linkA,dataA,successA,failA){
    fetch(linkA+"?"+dataA,{
        method: 'GET',
        mode:'cors',
        cache: 'default'
    })
    .then((resp)=>resp.text())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------
function getJSONRequest(linkA,dataA,successA,failA){
    fetch(linkA+"?"+dataA,{
        method: 'GET',
        mode:'cors',
        cache: 'default'
    })
    .then((resp)=>resp.json())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------
function postRequest(linkA,dataA,successA,failA){
    fetch(linkA,{
        method: 'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        cache: 'default',
        body:dataA
    })
    .then((resp)=>resp.text())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------
function postJSONRequest(linkA,dataA,successA,failA){
    fetch(linkA,{
        method: 'POST',
        mode:'cors',
        headers:{
            "Content-Type":"application/json"
        },
        cache: 'default',
        body:JSON.stringify(dataA)
    })
    .then((resp)=>resp.json())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------
function putRequest(linkA,dataA,successA,failA){
    fetch(linkA,{
        method: 'PUT',
        mode:'cors',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        cache: 'default',
        body:dataA
    })
    .then((resp)=>resp.text())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------
function putJSONRequest(linkA,dataA,successA,failA){
    fetch(linkA,{
        method: 'PUT',
        mode:'cors',
        headers:{
            "Content-Type":"application/json"
        },
        cache: 'default',
        body:JSON.stringify(dataA)
    })
    .then((resp)=>resp.json())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------
function deleteRequest(linkA,dataA,successA,failA){
    fetch(linkA+"?"+dataA,{
        method: 'DELETE',
        mode:'cors',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        cache: 'default'
    })
    .then((resp)=>resp.text())
    .then((data)=>successA(dataA))
    .catch((err)=>failA(err));
}
//------------------------------------------------------------

//GET + Params
//getRequest(DATA_LINK,"data=12",log,log);

//GET + JSON (w/o CORS)
//getJSONRequest(DATA_LINK,"data=12",log,log);

//POST + Params
//postRequest(DATA_LINK,"data=12",log,log);

//POST + JSON (w/o CORS)
//postJSONRequest(DATA_LINK,{data:12},log,log);

//PUT + Params
//putRequest(DATA_LINK,"data=12",log,log);

//PUT + JSON (w/o CORS)
//putJSONRequest(DATA_LINK,{data:12},log,log);

//DELETE + Params
//deleteRequest(DATA_LINK,"data=12",log,log);

//DELETE + JSON (w/o CORS)
//deleteJSONRequest(DATA_LINK,{data:12},log,log);
