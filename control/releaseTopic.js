var releases = require('../model/releaseTopic');


module.exports = {
  addTopic: (req, res) => {
    var topicContent = req.body.topicContent;
    releases.addTopic(topicContent, err => {
      if (err == null) {
        res.json({
          date: "话题成功存入"
        })
      }
    })

  },

}
