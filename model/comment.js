var mongoose = require('../util/database');

const comment = mongoose.model('comments', {
    recipeComment: String,
    username: String,
    userIcon: String,
    status: String,
    date1: String,
    recipeName: String,
    topicComment:String,
    topicContent:String,
});

module.exports = {
    commentRecipe: function (recipeComment, username, userIcon, status, date1, recipeName, cb) {   //用户评论
        var comments = new comment({
            recipeComment: recipeComment,
            username: username,
            userIcon: userIcon,
            status: status,
            date1: date1,
            recipeName: recipeName,
        });
        comments.save(function (err) {
            cb(err);
        });
    },

    getComment: (limit, offset, cb) => {    //管理员获取所有评论
        var total = 0;
        var limit = parseInt(limit);
        var offset = parseInt(offset);
        var mysort = { date1: -1 };
        comment.find().then(result => {
            total = result.length;
            comment.find()
                .sort(mysort)
                .limit(limit)
                .skip((offset / limit) * limit)
                .then(result => {
                    cb({
                        result: result,
                        total: total
                    });
                });
        });
    },

    examineComment: (recipeComment1, cb) => {   //审核
        cb(1);
        comment.update({ recipeComment: recipeComment1 }, { $set: { status: "1" } }).then(result => {
            console.log(result);
        })
    },
    //删除
    deleteComment: (recipeComment, cb) => {
        var recipeComment = recipeComment
        comment.remove({recipeComment:recipeComment}).then(result => {
            cb({
                result: result,
            })
        })
    },

    //管理员发布审核过的评论
    releaseComment: (recipeName, cb) => {
        console.log(recipeName)
        var mysort = { date1: -1 };
        comment.find({
            recipeName: recipeName,
            status: "1",
        }).sort(mysort).then(result => {
            if (result !== null) {
                console.log(result)
                cb(result);
            } else {
                cb(false);
            }
        });
    },

  
}

