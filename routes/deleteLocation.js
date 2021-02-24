var data = require("../data.json");

exports.deleteLocation = function(request, response) {
	var place = request.query.Location
    var date = request.query.Date
    var newJsonArr = []
    if(place != "" && date != ""){
        for (let i = 0; i < data.LocationsVisited.length; i++) {
            if(place != data.LocationsVisited[i].Place){
                var jsonObj = { "Place": data.LocationsVisited[i].Place,
					"Date": data.LocationsVisited[i].Date		
                }
                newJsonArr.push(jsonObj);
            }
        }
        data.LocationsVisited = newJsonArr;
    }

	
	response.render('index', data);
}