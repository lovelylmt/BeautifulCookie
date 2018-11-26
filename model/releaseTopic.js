var mongoose = require('../util/database');



const topic = mongoose.model('topics', {
    topicContent: String,
});

module.exports = {
    addTopic: function (topicContent, cb) {
        var topics = new topic({
            topicContent: topicContent,
        });
        topics.save(function (err) {
            cb(err);
        });
    },



}