var express = require('express');
var route = express();
var userController = require('../control/user');
route.post('/register',userController.register);


module.exports = route;
