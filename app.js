
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
var password = require('./routes/password');
var location = require('./routes/location');
var login = require('./routes/login');
var search = require('./routes/search');
var favorite = require('./routes/favorite');
var report = require('./routes/report');
var signup = require('./routes/signup');
var addLocation = require('./routes/addLocation');
var deleteLocation = require('./routes/deleteLocation');
var updateResult = require('./routes/updateResult');
var addUser = require('./routes/addUser');
var checkLogin = require('./routes/checkLogin');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/search', search.view);
app.get('/', login.view);
app.get('/password', password.view);
app.get('/location', location.view);
app.get('/favorite', favorite.view);
app.get('/profile', index.view);
app.get('/report', report.view);
app.get('/signup', signup.view);
app.get('/addLocation', addLocation.addLocation);
app.get('/deleteLocation', deleteLocation.deleteLocation);
app.get('/updateResult', updateResult.updateResult);
app.get('/addUser', addUser.addUser);
app.get('/checkLogin', checkLogin.checkLogin);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
