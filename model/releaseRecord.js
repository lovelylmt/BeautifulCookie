var mongoose = require('../util/database');



const topic = mongoose.model('records', {
    recordTitle: String,
    recordContent: String,
    recordImg: String,
});

module.exports = {
    addRecord: function (recordTitle,recordContent,recordImg,cb) {
        var topics = new topic({
            recordTitle: recordTitle,
            recordContent:recordContent,
            recordImg:recordImg,
        });
        topics.save(function (err) {
            cb(err);
        });
    },



}