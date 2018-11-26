var releases = require('../model/release');


module.exports = {
  addRecipe: (req, res) => {
    var recipeName = req.body.recipeName;
    var recipeDescription = req.body.recipeDescription;
    var mainMaterial = req.body.mainMaterial;
    var mainMaterialUsage = req.body.mainMaterialUsage;
    var accessories = req.body.accessories;
    var accessoriesUsage = req.body.accessoriesUsage;
    var step1 = req.body.step1;
    var step2 = req.body.step2;
    var step3 = req.body.step3;


    releases.addRecipe(recipeName, recipeDescription, mainMaterial, mainMaterialUsage, accessories, accessoriesUsage, step1, step2, step3, err => {
      if (err == null) {
        res.json({
          date: "菜谱成功存入"
        })
      }
    })
  },

}
