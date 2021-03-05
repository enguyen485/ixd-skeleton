var data = require("../data.json");

exports.deleteFavorite = function(request, response) {
	var place = request.query.Location
    var newJsonArr = []
    if(place != ""){
        for (let i = 0; i < data.SavedLocations.length; i++) {
            if(place != data.SavedLocations[i].Place){
                console.log("foudn some")
                var jsonObj = { "Place": data.SavedLocations[i].Place,
					"Positive": data.SavedLocations[i].Positive,
                    "Total": data.SavedLocations[i].Total	
                }
                newJsonArr.push(jsonObj);
            }
            else {
                console.log("found it and skipped: ", data.SavedLocations[i].Place);
            }
        }
        data.SavedLocations = newJsonArr;
    }

	
	response.render('favorite', data);
}