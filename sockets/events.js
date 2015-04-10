"strict";

var util = require("util"),
	Users = require("../database/database").DataBase.getDBUsers();
	

module.exports = function (io) { 

	var i = 0;
	var news = ["Bem vindo", 
	"Veja nossos detalhes", 
	"Ja sabe o que vestir?", 
	"Acompanhe tudo, só hoje!", 
	"hey! voce mesmo!", 
	"hahaha, esta pronto?", 
	"chega mais! sim! voce!", 
	"Eh voce mesmo? temos algo para voce", 
	"Nao vai ficar fora dessa, vai?", 
	"fiu fiu!"];
	
	var publishNews = function (socket) {
		var wait = setInterval(function() {
			socket.emit("news", news[i++])
			if (i === news.length) {
				i = 0;
			}
		}, 5000);
	}
	
	var publishUsers = function (socket) {
		var wait = setInterval(function () {
			Users.all(function (users) {
				users.forEach(function (user) {
					console.log(user);
				});
			});
		}, 15000);
	}
	
	io.sockets.on('connection', function(socket) {
		publishUsers(socket);
		publishNews(socket);
	
		//Using http://www.telize.com/
	    socket.on('event:frontend:location', function(data) {
			Users.save(data);
	    });
	});
}