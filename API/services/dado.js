const express = require("express");


function dado(req, res, next){
    const dado = Math.floor(req.query.dado);
    if(isNaN(dado)){
        res.status(400).send("Bad request");
    }else{
        const Rnumero = Math.floor(Math.random() * dado) + 1;
        res.status(200).send({
            numero: Rnumero
        });
    }
}

module.exports = dado;