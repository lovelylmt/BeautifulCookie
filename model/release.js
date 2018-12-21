var mongoose = require('../util/database');

const recipename = mongoose.model('recipes', {
    recipeName: String,
    img666: String,
    stepImg1: String,
    stepImg2: String,
    stepImg3: String,
    recipeDescription: String,
    mainMaterial: String,
    mainMaterialUsage: String,
    accessories: String,
    accessoriesUsage: String,
    step1: String,
    step2: String,
    step3: String,
    date1: String,
    username: String,
    userIcon: String,
    status: String,
    recipeType: String,
   
});

module.exports = {
    //用户上传菜谱
    addRecipe: function (recipeName, img666, stepImg1, stepImg2, stepImg3, recipeDescription, mainMaterial, mainMaterialUsage, accessories, accessoriesUsage, step1, step2, step3, date1, username, status, userIcon, recipeType, cb) {
        var recipes = new recipename({
            recipeName: recipeName,
            img666: img666,
            stepImg1: stepImg1,
            stepImg2: stepImg2,
            stepImg3: stepImg3,
            recipeDescription: recipeDescription,
            mainMaterial: mainMaterial,
            mainMaterialUsage: mainMaterialUsage,
            accessories: accessories,
            accessoriesUsage: accessoriesUsage,
            step1: step1,
            step2: step2,
            step3: step3,
            date1: date1,
            username: username,
            userIcon: userIcon,
            status: status,
            recipeType: recipeType,
        
        });

        recipes.save(function (err) {
            console.log(err);
            cb(err);
        });
    },
    //管理员获取所有菜谱
    getRecipe: (limit, offset, cb) => {
        var total = 0;
        var limit = parseInt(limit);
        var offset = parseInt(offset);
        var mysort = { date1: -1 };
        recipename.find().then(result => {
            total = result.length;
            recipename.find()
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
    //审核菜谱
    recipeExamine: (recipeName1, cb) => {
        recipename.update({ recipeName: recipeName1 }, { $set: { status: "1" } }).then(result => {
            console.log(result);
        })
    },
    //管理员发布审核的菜谱
    upRecipe: (cb) => {
        // var count=countID;
        var mysort = { date1: -1 };
        recipename.find({ status: "1", }).sort(mysort).then(result => { console.log(result); cb(result) })
    },


    //具体菜谱做法
    cookdetail: (recipeName, cb) => {
        console.log(recipeName)
        recipename.findOne({
            recipeName: recipeName
        }).then(result => {
            if (result !== null) {
                console.log(result)
                cb(result);
            } else {
                cb(false);
            }
        });
    },


    //用户发布菜谱
    relRecipe: (username, cb) => {
        var mysort = { date1: -1 };
        recipename.find({
            username: username,
            status: "1",
        }).sort(mysort).then(result => {
            console.log(result);
            cb(result)
        })
    },

    //搜索
    searchRecipe: (recipename1, cb) => {
        console.log(recipename1);
        recipename.find(
            { recipeName: { $regex: recipename1, $options: 'i' } }
        ).then(result => {
            console.log(result);
            if (result !== null) {
                cb(result);
                console.log(result);
            } else {
                cb(false);
            }
        });
    },
}