var releases = require('../model/releaseRecord');


module.exports = {
  addRecord: (req, res) => {
    var recordTitle = req.body.recordTitle;
    var recordContent = req.body.recordContent;
    var date1 = req.body.date1;
    var recordType = req.body.recordType;
    var recordImg = req.body.recordImg;
    var username = req.body.username;
    var userIcon = req.body.userIcon;
    var status = req.body.status;


    releases.addRecord(recordTitle, recordContent, date1, recordImg, username, userIcon, status, recordType, err => {
      if (err == null) {
        res.json({
          date: "日志成功存入"
        })
      }
    })

  },
  //管理员获取所有日志
  getRecord: (req, res) => {
    const { limit, offset } = req.body; //es6  解构;
    releases.getRecord(limit, offset, err => {
      console.log(err);
      res.json({
        recordinfo: err
      })
    }
    );
  },

  //审核插入的内容
  recordExamine: (req, res) => {
    const recordContent = req.body.recordContent;
    releases.recordExamine(recordContent, err => {
      res.json({
        recordinfo: err
      })
    }
    );
  },
  //管理员发布日志
  upRecord: (req, res) => {
    console.log(123);
    releases.upRecord(
      err => {
        console.log(err);
        res.json({
          recordinfo: err
        })
      }
    );
  },

  //具体日志
  recordDetail: (req, res) => {
    var recordTitle = req.body.recordTitle;
    console.log(recordTitle);
    releases.recordDetail(recordTitle, err => {
      console.log(err)
      res.json({
        recordinfo: err,
      })
    })
  },

  //用户发布日志
  relRecord: (req, res) => {
    const username = req.body.username;
    releases.relRecord(username, err => {
      console.log(err);
      res.json({
        recordinfo: err
      })
    }
    );
  },
  //搜索日志
  searchRecord: (req, res) => {
    const recordContent = req.body.recordContent;
    releases.searchRecord(recordContent, err => {
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
