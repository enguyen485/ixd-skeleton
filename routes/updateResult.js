var data = require("../data.json");

exports.updateResult = function(request, response) {
    var result = request.query.Result
    console.log(data.SavedLocations);
	if(result == "YES"){
        for (let i = 0; i < data.LocationsVisited.length; i++) {
            for (let j = 0; j < data.SavedLocations.length; j++) {
                if(data.SavedLocations[j].Place == data.LocationsVisited[i].Place){
                    console.log(data.SavedLocations[j]);
                    console.log(j);
                    data.SavedLocations[j].Total += 1;
                    data.SavedLocations[j].Positive += 1;
                }
            }
        } 
    }

    if(result == "NO"){
        for (let i = 0; i < data.LocationsVisited.length; i++) {
            for (let j = 0; j < data.SavedLocations.length; j++) {
                if(data.SavedLocations[j].Place == data.LocationsVisited[i].Place){
                    data.SavedLocations[j].Total += 1;
                }
            }
        }
    }
	
	response.render('report', data);
}