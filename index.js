const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pagamento = require("./models/Formulariodb")
const path = require('path');

//Extra 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,"./static/")));

// Rotas 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/landing-page/formulario.html");
});


app.post('/form', function(req, res){
  pagamento.create({
      nome:            req.body.nome,
      data_nascimento: req.body.data_nascimento,
      email:           req.body.email,
      telefone:        req.body.telefone
  }).then(function(){
      res.redirect('http://api.actualsales.com.br/join-asbr/ti/lead');
  }).catch(function(erro){
      res.send("Erro: não foi cadastrado!" + erro);
  });
});

// app.post('/form', function (req, res) {
//   res.send("formulario");
// });

app.listen(3000);