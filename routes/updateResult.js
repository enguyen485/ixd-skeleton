var data = require("../data.json");

exports.updateResult = function(request, response) {
    var result = request.query.Result
    console.log(data.SavedLocations);
    var currentResult = data.PositiveResult[0].Positive;
    if(currentResult == ""){
        if(result == "YES"){
            data.PositiveResult[0].Positive = "YES";
            for (let i = 0; i < data.LocationsVisited.length; i++) {
                for (let j = 0; j < data.SavedLocations.length; j++) {
                    if(data.SavedLocations[j].Place == data.LocationsVisited[i].Place){
                        data.SavedLocations[j].Total += 1;
                        data.SavedLocations[j].Positive += 1;
                    }
                }
            } 
        }
        if(result == "NO"){
            data.PositiveResult[0].Positive = "NO";
            for (let i = 0; i < data.LocationsVisited.length; i++) {
                for (let j = 0; j < data.SavedLocations.length; j++) {
                    if(data.SavedLocations[j].Place == data.LocationsVisited[i].Place){
                        data.SavedLocations[j].Total += 1;
                    }
                }
            }
        }
    }
    if(currentResult == "YES" && result == "NO"){
        data.PositiveResult[0].Positive = "NO";
        for (let i = 0; i < data.LocationsVisited.length; i++) {
            for (let j = 0; j < data.SavedLocations.length; j++) {
                if(data.SavedLocations[j].Place == data.LocationsVisited[i].Place){
                    data.SavedLocations[j].Positive -= 1;
                }
            }
        } 
    }
    if(currentResult == "NO" && result == "YES"){
        data.PositiveResult[0].Positive = "YES";
        for (let i = 0; i < data.LocationsVisited.length; i++) {
            for (let j = 0; j < data.SavedLocations.length; j++) {
                if(data.SavedLocations[j].Place == data.LocationsVisited[i].Place){
                    data.SavedLocations[j].Positive += 1;
                }
            }
        } 
    }
	
	
	response.render('index', data);
}