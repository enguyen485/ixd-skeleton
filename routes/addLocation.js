var data = require("../data.json");

exports.addLocation = function(request, response) {
	var place = request.query.Location
	var date = request.query.Date
	if(place != "" && date != ""){
		var jsonObj = { "Place": place,
					"Date": date		
					}

		data.LocationsVisited.push(jsonObj);
	}
	
	response.render('index', data);
}