var admin = require('../model/admin');

module.exports = {
    login: (req, res) => {
        var name = req.body.name;
        var password = req.body.password;
        admin.login(name, password, err => {
            console.log(err)
            if (err.length > 0) {
                res.json({
                    date: '登录成功'
                })
            } else {
                res.json({
                    date: '登录失败'
                    
                })
            }
        })
    },
}