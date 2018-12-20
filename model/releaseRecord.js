var mongoose = require('../util/database');



const topic = mongoose.model('records', {
    recordTitle: String,
    recordContent: String,
    date1: String,
    recordImg: String,
    username: String,
    userIcon: String,
    status: String,
    recordType: String,
});

module.exports = {
    //用户发布日志
    addRecord: function (recordTitle, recordContent,date1, recordImg, username, userIcon, status, recordType, cb) {
        var topics = new topic({
            recordTitle: recordTitle,
            recordContent: recordContent,
            date1: date1,
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
        var mysort = { date1: -1 };
        topic.find({}).then(result => {
            total = result.length;
            topic.find()
            .sort(mysort)
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

    upRecord: (cb) => { 
           //管理员发布审核的日志
        var mysort = { date1: -1 };
        topic.find({ status: "1", }).sort(mysort).then(result => { console.log(result); cb(result) })
    },

   //具体日志
   recordDetail: (recordTitle, cb) => {
    console.log(recordTitle)
    topic.findOne({
        recordTitle: recordTitle
    }).then(result => {
        if (result !== null) {
            console.log(result)
            cb(result);
        } else {
            cb(false);
        }
    });
},
      //用户发布日志
      relRecord: (username, cb) => {
        var mysort = { date1: -1 };
        topic.find({
            username: username ,
            status: "1", 
        }).limit(2).sort(mysort).then(result => {
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