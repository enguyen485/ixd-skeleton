var data = require("../data.json");

exports.addReport = function(request, response) {
	var place = request.query.Location
    var newJsonArr = []
    var found = false;
    if(place != ""){
        for (let i = 0; i < data.SavedLocations.length; i++) {
            if(place == data.SavedLocations[i].Place){
                var jsonObj = { "Place": data.SavedLocations[i].Place,
					"Positive": data.SavedLocations[i].Positive,
                    "Total": data.SavedLocations[i].Total	
                }
                newJsonArr.push(jsonObj);
                found = true;
            }
        }
    }

    if(!found){
        var jsonObj = { "Place": place,
					"Positive": 0,
                    "Total": 0
                }
        newJsonArr.push(jsonObj);
    }
    console.log("got in here when searching");
    data.Report = newJsonArr;
	response.render('report', data);
}