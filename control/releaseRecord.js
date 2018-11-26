var releases = require('../model/releaseRecord');


module.exports = {
    addRecord: (req, res) => {
    var recordTitle = req.body.recordTitle;
    var recordContent = req.body.recordContent;
    var recordImg = req.body.recordImg;
    releases.addRecord(recordTitle,recordContent,recordImg, err => {
      if (err == null) {
        res.json({
          date: "日志成功存入"
        })
      }
    })

  },

}
