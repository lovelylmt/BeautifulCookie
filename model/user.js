var mongoose = require('../util/database')
const User = mongoose.model("User", { username: String, password: String });
module.exports={
  register:(username,password,cb)=>{
         User.find({username:username,password:password}).then(  res =>{
              console.log(res.length);
              if(res.length === 0 ) {
                 cb(true);     
              }
              else {
                cb(false);
              }
         })
  }
}