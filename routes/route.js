var express = require('express');
var route = express();

var date1 = require('../control/user');   //用户注册和登录
var recipe = require('../control/release');//用户发表菜谱
var topic = require('../control/releaseTopic'); //用户发表话题
var record = require('../control/releaseRecord');
// var picController=require('../control/image')  //用户上传图片


route.post('/register', date1.register);
route.post('/login', date1.login);

route.post('/release', recipe.addRecipe);
route.post('/releaseTopic', topic.addTopic);
route.post('/releaseRecord', record.addRecord);
// router.post('/uploadImage',picController.uploadImage);


module.exports = route;
