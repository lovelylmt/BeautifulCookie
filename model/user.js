var mongoose = require('../util/database');
const user = mongoose.model('users', { username: String, password: String });

module.exports = {
    users: (username, password, cb) => {    //从数据库里面查找有没有与它相同的数据
        user.find({
            username: username,
            password: password
        }).then(resuilt => {
           
            if (resuilt.length > 0) {
                cb([])
            } else {cb([123])
                var users = new user({
                    username: username,
                    password: password,
                   
                });
                users.save(function (err) {                //保存到数据库
              
                });
            }

        })
    },
    login:(username,password,cb)=>{
        user.find({
            username: username,
            password: password
        }).then(resuilt=>{
            cb(resuilt)
        })
    }


}

