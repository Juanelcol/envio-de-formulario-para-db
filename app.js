const express = require('express');
const app = express();
const db = require('./models/db')
const bodyParser = require('body-parser')
const Produtos = require('./models/Produtos')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.json())

app.get('/cad_usuario', (req, res)=>{
    res.sendFile(__dirname + '/cad_usuarios.html')
})

app.post('/cadastrar_usuarios', (req, res)=>{
    console.log(req.body)
    res.send(req.body.nome + req.body.email)
})

app.get('/cad_produto', (req, res)=>{
    res.sendFile(__dirname + '/cad_produtos.html') 
})

app.post('/cadastrar_produtos', (req, res)=>{
     //console.log(req.body)
   // res.send(req.body.prod + req.body.desc + req.body.preco)
   Produtos.create({
       nome_prod: req.body.prod,
       descricao: req.body.desc,
       preco: req.body.preco
   }).then(function(){
       res.send("Cadastrado com sucesso")
   }).catch(function(err){
       res.send("Não cadsatrado / " + err )
   })
})

app.listen(8000, ()=>{
    console.log('Servidor rodando com sucesso....');
})