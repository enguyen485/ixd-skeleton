var data = require("../data.json");

exports.addUser = function(request, response) {
	var username = request.query.username
	var password = request.query.password
	var reenter = request.query.reenter
    var email = request.query.email
    var flag = false
    for (let i = 0; i < data.Users.length; i++) {
        if(username == data.Users[i].Username){
            flag = true
        }
    }
    if(flag){
        data.Error[0].Message = "*** The username you entered already exists. Please Try Again ***";
		response.render('signup', data);
    } else if(username == "" || password == "" || reenter == "" || email == ""){
        data.Error[0].Message = "*** One or more fields were left blank. Please Try Again ***";
		response.render('signup', data);
    } else if(password != reenter){
        data.Error[0].Message = "*** The passwords you entered did not match. Please Try Again ***";
		response.render('signup', data);
    } else {
        data.Error[0].Message = "";
        var jsonObj = { "Username": username,
                    "Password": password,
                    "Email" : email		
                    }
        data.Users.push(jsonObj);
        response.render("login", data);
    }
}