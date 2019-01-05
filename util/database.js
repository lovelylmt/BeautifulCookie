const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Cook', { useNewUrlParser: true });  //使用新的链接解析器
mongoose.Promise=global.Promise;
module.exports=mongoose;

