var data = require("../data.json");

exports.checkLogin = function(request, response) {
	var username = request.query.username
	var password = request.query.password
    var flag = false
    for (let i = 0; i < data.Users.length; i++) {
        if(username == data.Users[i].Username && password == data.Users[i].Password){
            flag = true
        }
    }
    if(username == "" || password == ""){
        data.Error[0].Message = "*** One or more fields were left blank. Please Try Again ***";
        response.render('login', data);
    } else if(!flag){
        data.Error[0].Message = "*** The username or password are incorrect. Please Try Again ***";
		response.render('login', data); 
    } else {
        data.Error[0].Message = "";
		response.render('index', data);
    }
}