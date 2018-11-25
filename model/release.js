var mongoose = require('../util/database');

const recipename = mongoose.model('recipes', {
    recipeName: String,
    recipeDescription: String,
    mainMaterial: String,
    mainMaterialUsage: String,
    accessories: String,
    accessoriesUsage: String,
});

module.exports = {
    addRecipe: function (recipeName, recipeDescription, mainMaterial, mainMaterialUsage, accessories, accessoriesUsage, cb) {
        var recipes = new recipename({
            recipeName: recipeName,
            recipeDescription: recipeDescription,
            mainMaterial: mainMaterial,
            mainMaterialUsage: mainMaterialUsage,
            accessories: accessories,
            accessoriesUsage: accessoriesUsage,

        });
        recipes.save(function (err) {
            cb(err);
        });
    },


}