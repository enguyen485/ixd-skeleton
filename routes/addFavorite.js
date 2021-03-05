var data = require("../data.json");

exports.addFavorite = function(request, response) {
	var place = data.Report[0].Place;
	var pos = data.Report[0].Positive;
    var total = data.Report[0].Total;
	if(place != "" ){
		var found = false;
		for(i = 0; i < data.FavoritedLocations.length; i++){
			if(place == data.FavoritedLocations[i].Place){
				found = true;
			}
		}
		if(!found){
			var jsonObj = { "Place": place,
					"Positive": pos,
                    "Total": total}
			data.FavoritedLocations.unshift(jsonObj);
		}
		
	}

	for(i = 0; i < data.FavoritedLocations.length; i++){
		for(j = 0; j < data.SavedLocations.length; j++){
		  if(data.FavoritedLocations[i].Place == data.SavedLocations[j].Place){
			data.FavoritedLocations[i].Positive = data.SavedLocations[j].Positive;
			data.FavoritedLocations[i].Total = data.SavedLocations[j].Total;
		  }
		}
	}

	response.render('favorite', data);
}