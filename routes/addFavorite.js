var data = require("../data.json");

exports.addFavorite = function(request, response) {
	var place = data.Report[0].Place;
	var pos = data.Report[0].Positive;
    var total = data.Report[0].Total;
	if(place != "" ){
		var found = false;
		for(i = 0; i < data.SavedLocations.length; i++){
			if(place == data.SavedLocations[i].Place){
				found = true;
			}
		}
		if(!found){
			var jsonObj = { "Place": place,
					"Positive": pos,
                    "Total": total}
			data.SavedLocations.unshift(jsonObj);
		}
		
	}
	
    // TODO: should i do this bc then it will reset page?
	response.render('favorite', data);
}