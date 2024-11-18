//Pelo módulo http
/*const http = require('http');
const port = 8080;
const server = http.createServer((req,res) => {
    if (req.url == "/home"){
        res.writeHead(200, {
            "Content-Type": "text/html",
            "accept-encoding": "utf-8"
        });
        res.end("<h1>olá, teste</h1> <h4>parte dois</h4>");
    }
    if (req.url == "/contatos"){
        res.writeHead(200, {
            "Content-Type": "text/html",
            "accept-encoding": "utf-8"
        });
        res.end("<h1>olá, teste</h1> <h4>Página de contatos</h4>");
    }
});
server.listen(port,() => console.log("rodando..."));*/

//convertido em express
const express = require('express');
const app = express();
const path = require('path');
app.set("view engine","ejs");
app.set("views","src/views");

app.get('/', (req, res) => {
    res.contentType('text/html'); //se inserir um aplication/html provavelmente o navegador vai fazer download da página
    //res.status(200).send("<h3>teste por express text/html</h3>");
    var conteudo = "esse é um teste de conteudo";
    res.render("index", {conteudo});
    //res.sendFile(path.join(__dirname, '../src/views/index2.html'));
    
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("rodando expressssss!!!!"));