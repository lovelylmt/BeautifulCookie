
var users = require('../model/user');

module.exports = {
  register: (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var userIcon = req.body.userIcon;
    users.users(username, password, userIcon, err => {
      if (err.length > 0) {      //输入的数据与数据库里面的数据比较
        res.json({
          date: '注册成功'
        })
      } else {
        res.json({
          date: '该用户已被注册'
        })
      }

    })
  },

  login: (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    users.login(username, password, err => {
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
  //用户头像
  upicon: (req, res) => {
    var username = req.body.username;
    users.upicon(username, err => {
      console.log(err)
      res.json({
        username: err.username,
        userIcon: err.userIcon,
      })
    })
  },

  //管理员获取所有用户
  getAll: (req, res) => {
    const { limit, offset } = req.body;
    users.getAllUser(limit, offset, err => {
      console.log(err);
      res.json({
        userinfo: err
      })
    }
    );
  },

}
