var mongoose = require('../util/database');

const recipename = mongoose.model('recipes', {
    recipeName: String,
    recipeDescription: String,
    mainMaterial: String,
    mainMaterialUsage: String,
    accessories: String,
    accessoriesUsage: String,
    step1: String,
    step2: String,
    step3: String,
});

// const topic = mongoose.model('topics', {
//     topicContent: String,
// });

module.exports = {
    addRecipe: function (recipeName, recipeDescription, mainMaterial, mainMaterialUsage, accessories, accessoriesUsage, step1, step2, step3, cb) {
        var recipes = new recipename({
            recipeName: recipeName,
            recipeDescription: recipeDescription,
            mainMaterial: mainMaterial,
            mainMaterialUsage: mainMaterialUsage,
            accessories: accessories,
            accessoriesUsage: accessoriesUsage,
            step1: step1,
            step2: step2,
            step3: step3,
           
        });
        recipes.save(function (err) {
            cb(err);
        });
    },
    // addTopic: function (topicContent, cb) {
    //     var topics = new topic({
    //         topicContent: topicContent,
    //     });
    //     topics.save(function (err) {
    //         cb(err);
    //     });
    // },



}