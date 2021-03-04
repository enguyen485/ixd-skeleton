var data = require("../data.json");
exports.view = function(req, res){
  data.Error[0].Message = "";
  res.render("login");
};