var mongoose = require('../util/database');



const topic = mongoose.model('records', {
    recordTitle: String,
    recordContent: String,
    recordImg: String,
    username: String,
    userIcon: String,
    status: String,
    recordType: String,
});

module.exports = {
    //用户发布日志
    addRecord: function (recordTitle, recordContent, recordImg, username, userIcon, status, recordType, cb) {
        var topics = new topic({
            recordTitle: recordTitle,
            recordContent: recordContent,
            recordImg: recordImg,
            username: username,
            userIcon: userIcon,
            status: status,
            recordType: recordType,
        });
        topics.save(function (err) {
            cb(err);
        });
    },
    getRecord: ( limit ,offset,cb) => {    //管理员获取所有日志
        var total = 0;
        var limit = parseInt(limit);
        var offset = parseInt(offset);
        topic.find({}).then(result => {
            total = result.length;
            topic.find()
            .limit(limit)
            .skip((offset/ limit) * limit)
            .then(result => {
              cb({
                result: result,
                total: total
              });
            });
        });
    },

    recordExamine: (recordContent1, cb) => {   //审核日志
        cb(1);
        topic.update({ recordContent: recordContent1 }, { $set: { status: "1" } }).then(result => {
            console.log(result);
        })
    },

    upRecord: (cb) => {    //管理员发布审核的日志
        topic.find({ status: "1", }).then(result => { console.log(result); cb(result) })
    },

      //用户发布菜谱
      relRecord: (username, cb) => {
        topic.find({
            username: username ,
            status: "1", 
        }).then(result => {
            console.log(result);
            cb(result)
        })
    },
    

    searchRecord: (recordContent, cb) => {  //搜索
        
        topic.find(
            { recordContent: { $regex: recordContent, $options: 'i' } }
        ).then(result => {
            console.log(result);
            if (result !== null) {
                cb(result);
                console.log(result);
            } else {
                cb(false);
            }
        });
    }
}