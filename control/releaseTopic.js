var releases = require('../model/releaseTopic');


module.exports = {
  //用户上传话题
  addTopic: (req, res) => {
    var topicContent = req.body.topicContent;
    var date1 = req.body.date1;
    var topicImg = req.body.topicImg;
  
    var username = req.body.username;
    var userIcon = req.body.userIcon;
    var status = req.body.status;
    var topicType = req.body.topicType;
    releases.addTopic(topicContent, date1, topicImg, username, userIcon, status, topicType, err => {
      if (err == null) {
        
        res.json({
          date: "话题成功存入"
        })
      }
    })
  },
  //管理员获取未审核的话题
  getTopic: (req, res) => {
    const { limit, offset } = req.body; //es6  解构;
    releases.getTopic(limit, offset, err => {
      console.log(err);
      res.json({
        topicinfo: err
      })
    }
    );
  },

  //审核插入的内容
  topicExamine: (req, res) => {
    const topicContent = req.body.topicContent;
    releases.topicExamine(topicContent, err => {
      res.json({
        topicinfo: err
      })
    }
    );
  },
   //删除
   deleteTopic: (req, res) => {
    const topicContent = req.body.topicContent;
    releases.deleteTopic(topicContent, err => {
      res.json({
        topicinfo: err
      })
    }
    );
  },
  //管理员发布话题
  upTopic: (req, res) => {
    console.log(123);
    releases.upTopic(
      err => {
        console.log(err);
        res.json({
          topicinfo: err
        })
      }
    );
  },

  //具体话题
  topicDetail: (req, res) => {
    var topicContent = req.body.topicContent;
    console.log(topicContent);
    releases.topicDetail(topicContent, err => {
      console.log(err)
      res.json({
        topicinfo: err,
      })
    })
  },

  //用户发布话题
  relTopic: (req, res) => {
    const username = req.body.username;
    releases.relTopic(username, err => {
      console.log(err);
      res.json({
        topicinfo: err
      })
    }
    );
  },

  //搜索话题
  searchTopic: (req, res) => {
    const topicContent = req.body.topicContent;
    releases.searchTopic(topicContent, err => {
      if (err !== false) {
        res.json({
          code: 200,
          data: {
            searchResult: err
          }
        })
      } else {
        res.json({
          code: 200,
          data: {
            searchResult: false
          }
        })
      }
    })
  }


}
