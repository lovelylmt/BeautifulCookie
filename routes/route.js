var express = require('express');
var route = express();

var date1 = require('../control/user');   //用户注册和登录
var recipe = require('../control/release');//用户上传菜谱
var topic = require('../control/releaseTopic'); //用户上传话题
var record = require('../control/releaseRecord'); //上传日志
var date2 = require('../control/admin'); //管理员登录
var comment = require('../control/comment');  //评论

route.post('/register', date1.register);
route.post('/login', date1.login);
route.post('/icon', date1.upicon);

route.post('/release', recipe.addRecipe);  //用户上传菜谱
route.post('/releaseTopic', topic.addTopic);
route.post('/releaseRecord', record.addRecord);
route.post('/admin', date2.login);  //管理员登录
route.post('/getAllUser', date1.getAll); //后台获取用户

route.post('/relRecipe', recipe.relRecipe); //用户发布菜谱
route.post('/relTopic', topic.relTopic);
route.post('/relRecord', record.relRecord);

route.post('/getALLRecipe', recipe.getRecipe);   //后台获取用户未审核菜谱
route.post('/getALLTopic', topic.getTopic);
route.post('/getALLRecord', record.getRecord);

route.post('/examineRecipe', recipe.recipeExamine);  //审核菜谱
route.post('/examineRecord', record.recordExamine);
route.post('/examineTopic', topic.topicExamine);

route.post('/deleteRecipe', recipe.deleteRecipe);  //管理员删除菜谱
route.post('/deleteRecord', record.deleteRecord);
route.post('/deleteTopic', topic.deleteTopic);

route.post('/upRecipe', recipe.upRecipe);   //管理员发布菜谱到页面
route.post('/upRecord', record.upRecord);
route.post('/upTopic', topic.upTopic);

route.post('/searchRecipe', recipe.searchRecipe);   //查询菜谱(搜索)
route.post('/searchRecord', record.searchRecord);
route.post('/searchTopic', topic.searchTopic);

route.post('/cookdetail', recipe.cookdetail);  //具体菜谱
route.post('/topicDetail', topic.topicDetail);
route.post('/recordDetail', record.recordDetail);

route.post('/commentRecipe', comment.commentRecipe);   //用户评论
route.post('/getALLcomment', comment.getComment);    //管理员获取未审核的评论
route.post('/examineComment', comment.examineComment);  //审核
route.post('/deleteComment', comment.deleteComment);    //删除
route.post('/releaseComment', comment.releaseComment);   //发表评论

  



module.exports = route;
