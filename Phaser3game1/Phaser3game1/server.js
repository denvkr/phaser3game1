'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const fs = require('fs').promises;
const path = require('path');

//var indexFile;
console.log(__dirname);
/*
const requestListener = function (req, res) {
    fs.readFile(__dirname + "\\index.html").then(contents => {
        //indexFile = contents;
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        server.listen(port, req.hostname, () => {
            console.log(`Server is running on http://${req.hostname}:${port}`);
        });
        res.end(contents);
    }).catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        //process.exit(1);
        res.writeHead(500);
        res.end(err);
        return;
    });
    //res.setHeader("Content-Type", "text/html");
    //res.writeHead(200);
    //res.end(indexFile);
};
console.log(requestListener);
const server = http.createServer(requestListener);//.listen(port);
*/
http.createServer(function (req, res) {

//const requestListener = function (req, res) {

//};
    fs.readFile(__dirname + "\\index.html").then(contents => {
        //indexFile = contents;
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        //server.listen(port, req.hostname, () => {
        //    console.log(`Server is running on http://${req.hostname}:${port}`);
        //});
        res.end(contents);
    }).catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        //process.exit(1);
        res.writeHead(500);
        res.end(err);
        return;
    });
    //res.setHeader("Content-Type", "text/html");
    //res.writeHead(200);
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //'<html><body><h1>This is HTML</h1></body></html'
    //res.end();
}).listen(port);