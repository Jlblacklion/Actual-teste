const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Extra 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/landing-page/Formulario.html");
});

app.post('/form', function(req, res){
  pagamento.create({
      nome: req.body.nome,
      data_nascimento: req.body.data_nascimento,
      email:req.body.email,
      telefone: req.body.telefone
  }).then(function(){
      res.sendFile('/formulario')
  }).catch(function(erro){
      res.send("Erro: Pagamento não foi cadastrado!" + erro)
  })
})
 
app.listen(3000);