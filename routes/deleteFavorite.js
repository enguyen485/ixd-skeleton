var data = require("../data.json");

exports.deleteFavorite = function(request, response) {
	var place = request.query.Location
    var newJsonArr = []
    if(place != ""){
        for (let i = 0; i < data.FavoritedLocations.length; i++) {
            if(place != data.FavoritedLocations[i].Place){
                console.log("foudn some")
                var jsonObj = { "Place": data.FavoritedLocations[i].Place,
					"Positive": data.FavoritedLocations[i].Positive,
                    "Total": data.FavoritedLocations[i].Total	
                }
                newJsonArr.push(jsonObj);
            }
            else {
                console.log("found it and skipped: ", data.FavoritedLocations[i].Place);
            }
        }
        data.FavoritedLocations = newJsonArr;
    }

	
	response.render('favorite', data);
}