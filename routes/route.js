var express = require('express');
var route = express();

var date1 = require('../control/user');
var recipe = require('../control/release');


route.post('/register', date1.register);
route.post('/login', date1.login);

route.post('/release', recipe.addRecipe);


module.exports = route;
