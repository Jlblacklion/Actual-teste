const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Extra 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


sequelize.authenticate().then(function(){
  console.log("Conectado");
}).catch(function(err){
  console.log("Falha de conexão" + err);
});


 // Rotas 
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/landing-page/formulario.html");
});

// app.get('/formulario', function (req, res) {
//   res.sendfile(__dirname + "/landing-page/formulario.html");
// });

app.post('/form', function (req, res) {
  res.send("Nome: " + req.body.nome + "<br> Data de Nascimento: " + 
  req.body.data_nascimento + "<br>Email: " + req.body.email + 
  req.body.telefone);
});
 
app.listen(3000);