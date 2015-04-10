"strict";

var levelup = require('levelup'),
	User = require("../model/user").User;
	
const PATH = __dirname + "/";

exports.DataBase = (function() {
	var self = this;
	var users = levelup(PATH + 'users');
	
	return {
		getDBUsers : function () {
			return {
				save : function (params) {
					var user = new User(params);
					var new_user = JSON.stringify(user);
						
					users.put(user.ip, new_user, function (err) {
					  if (err) {
						  return console.error('Get error put user into database.', err);
					  }
					});
				},
				
				all : function (callback) {
					allUsers = [];
				  	users.createReadStream()
					    .on('data', function (data) {
							allUsers.push(new User(JSON.parse(data.value)));
					    })
					    .on('error', function (err) {
					      console.log('Get error ', err)
					    })
					    .on('close', function () {
					      //console.log('Stream close')
					    })
					    .on('end', function () {
					      //console.log('Stream end')
							callback(allUsers);
					    })
				}
			}
		}
	}
})();
