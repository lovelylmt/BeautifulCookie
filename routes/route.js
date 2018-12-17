var express = require('express');
var route = express();

var date1 = require('../control/user');   //用户注册和登录
var recipe = require('../control/release');//用户上传菜谱
var topic = require('../control/releaseTopic'); //用户上传话题
var record = require('../control/releaseRecord'); //上传日志
var date2 = require('../control/admin'); //管理员登录



route.post('/register', date1.register);
route.post('/login', date1.login);
route.post('/icon', date1.upicon);

route.post('/release', recipe.addRecipe);  //用户上传菜谱
route.post('/releaseTopic', topic.addTopic);
route.post('/releaseRecord', record.addRecord);
route.post('/admin', date2.admin);  //管理员登录
route.post('/getAllUser', date1.getAll); //后台获取用户

route.post('/relRecipe', recipe.relRecipe); //用户发布菜谱
route.post('/relTopic', topic.relTopic);
route.post('/relRecord', record.relRecord);

route.post('/getALLRecipe', recipe.getRecipe);  //后台获取用户未审核菜谱
route.post('/getALLTopic', topic.getTopic);
route.post('/getALLRecord', record.getRecord);
route.post('/examineRecipe', recipe.recipeExamine); //审核菜谱
route.post('/examineRecord', record.recordExamine);
route.post('/examineTopic', topic.topicExamine);
route.post('/upRecipe', recipe.upRecipe); //管理员发布菜谱到页面
route.post('/upRecord', record.upRecord);
route.post('/upTopic', topic.upTopic);

route.post('/searchRecipe', recipe.searchRecipe);  //查询菜谱(搜索)
route.post('/searchRecord', record.searchRecord);
route.post('/searchTopic', topic.searchTopic);

route.post('/cookdetail', recipe.cookdetail);  //具体菜谱

module.exports = route;
