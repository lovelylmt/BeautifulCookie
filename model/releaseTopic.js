var mongoose = require('../util/database');



const topic = mongoose.model('topics', {
    topicContent: String,
    topicImg: String,
    username: String,
    userIcon: String,
    status: String,
    topicType: String,
});

module.exports = {
    addTopic: function (topicContent, topicImg, username, userIcon, status, topicType, cb) {   //用户上传话题
        var topics = new topic({
            topicContent: topicContent,
            topicImg: topicImg,
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

    topicExamine: (topicContent1, cb) => {   //审核话题
        cb(1);
        topic.update({ topicContent: topicContent1 }, { $set: { status: "1" } }).then(result => {
            console.log(result);
        })
    },

    upTopic: (cb) => {       //管理员发布审核过的话题
        topic.find({ status: "1" }).then(result => { console.log(result); cb(result) })
    },

          //用户发布菜谱
          relTopic: (username, cb) => {
            topic.find({
                username: username ,
                status: "1", 
            }).then(result => {
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