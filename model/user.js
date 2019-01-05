var mongoose = require('../util/database');
const user = mongoose.model('users', {
    username: String,
    password: String,
    userIcon: String,
});
module.exports = {
    users: (username, password, userIcon, cb) => {    //从数据库里面查找有没有与它相同的数据 
        user.find({
            username: username,
            password: password,
            userIcon: userIcon,
        }).then(resuilt => {

            if (resuilt.length > 0) {
                cb([])
            } else {
                cb([123])
                var users = new user({
                    username: username,
                    password: password,
                    userIcon: userIcon,

                });
                users.save(function (err) {                //保存到数据库

                });
            }

        })
    },

    login: (username, password, cb) => {
        user.find({
            username: username,
            password: password
        }).then(resuilt => {
            cb(resuilt)
        })
    },
    
    upicon: (username, cb) => {
        user.findOne({                             //从数据库里面查找
            username: username
        }).then(result => {
            if (result !== null) {
                console.log(result)
                cb(result);
            } else {
                cb(false);
            }
        });
    },
    //管理员获取所有用户
    getAllUser: (limit, offset, cb) => {
        var total = 0;
        var limit = parseInt(limit);
        var offset = parseInt(offset);
        user.find({}).then(result => {
            total = result.length;
            user.find()
                .limit(limit)
                .skip((offset / limit) * limit)
                .then(result => {
                    cb({
                        result: result,
                        total: total
                    });
                });
        });

    },


}


