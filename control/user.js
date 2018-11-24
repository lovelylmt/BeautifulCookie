var users=require('../model/user');
module.exports={
  register:(req,res)=>{  
  var username=req.body.username;
  var password=req.body.password;
  users.users(username,password,err=>{
     if(err.length>0){
      res.json({
         date:'注册成功'
       })
    }else{
      res.json({
       date:'该用户已被注册'
       })
     }
   
  })
  }
}
