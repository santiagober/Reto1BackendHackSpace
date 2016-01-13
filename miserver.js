var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
	var randomId = faker.random.uuid();
	var randomName = faker.name.findName();
	var randomPost = faker.lorem.sentence();
	var randomDate = faker.date.past();
	var randomImage = faker.image.avatar();

	return {
		id : randomId,
		nombre : randomName,
		contenido : randomPost,
		fecha : randomDate,
		imagen : randomImage
	}
}

app.get('/',function(req, res){
	res.send('mi primer servidor!!!');
});

app.get('/amigos', function(req, res){
	res.send('mis amigos!!!');
});

app.get('/posts', function(req, res){
	var cantidad = _.random(4,8);
	var usuarios = _.times(cantidad, generarUsuario);
	res.json(usuarios);
});

app.listen(3000);