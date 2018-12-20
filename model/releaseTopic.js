var mongoose = require('../util/database');

const topic = mongoose.model('topics', {
    topicContent: String,
    date1: String,
    topicImg: String,
    topicImg1: String,
    topicImg2: String,
    username: String,
    userIcon: String,
    status: String,
    topicType: String,
});

module.exports = {
    addTopic: function (topicContent,date1, topicImg,topicImg1,topicImg2, username, userIcon, status, topicType, cb) {   //用户上传话题
        var topics = new topic({
            topicContent: topicContent,
            date1: date1,
            topicImg: topicImg,
            topicImg1: topicImg1,
            topicImg2: topicImg2,
            username: username,
            userIcon: userIcon,
            status: status,
            topicType: topicType,
        });
        topics.save(function (err) {
            cb(err);
        });
    },
    getTopic: ( limit ,offset,cb) => {    //管理员获取所有话题
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

    topicExamine: (topicContent1, cb) => {   //审核话题
        cb(1);
        topic.update({ topicContent: topicContent1 }, { $set: { status: "1" } }).then(result => {
            console.log(result);
        })
    },

    upTopic: (cb) => { 
        var mysort = { date1: -1 };      //管理员发布审核过的话题
        topic.find({ status: "1" }).sort(mysort).then(result => { console.log(result); cb(result) })
    },

        //具体话题

        topicDetail: (topicContent, cb) => {
            console.log(topicContent)
            topic.findOne({
                topicContent: topicContent
            }).then(result => {
                if (result !== null) {
                    console.log(result)
                    cb(result);
                } else {
                    cb(false);
                }
            });
        },

          //用户发布话题
          relTopic: (username, cb) => {
            var mysort = { date1: -1 };
            topic.find({
                username: username ,
                status: "1", 
            }).sort(mysort).then(result => {
                console.log(result);
                cb(result)
            })
        },

    searchTopic: (topicContent, cb) => {  //搜索    
        topic.find(
            { topicContent: { $regex: topicContent, $options: 'i' } }
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