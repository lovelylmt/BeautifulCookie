var hasRegister = require('../model/user')

module.exports={
  register:(req,res)=>{
    const { username , password } = req.body;
    hasRegister.register(username,password,err=>{
      console.log(err);
      res.json({
        register:err
      })
    });
  }
}