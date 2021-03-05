var data = require('../data.json');

exports.view = function(req, res){
    for(i = 0; i < data.FavoritedLocations.length; i++){
      for(j = 0; j < data.SavedLocations.length; j++){
        if(data.FavoritedLocations[i].Place == data.SavedLocations[j].Place){
          data.FavoritedLocations[i].Positive = data.SavedLocations[j].Positive;
          data.FavoritedLocations[i].Total = data.SavedLocations[j].Total;
        }
      }
    }
    res.render("favorite", data)
  };