var express=require('express');
var route=express();
var date1=require('../control/user')
route.post('/register',date1.register);

module.exports=route;
