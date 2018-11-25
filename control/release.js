var releases = require('../model/release');


module.exports = {
  addRecipe: (req, res) => {
    var recipeName = req.body.recipeName;
    var recipeDescription = req.body.recipeDescription;
    var mainMaterial = req.body.mainMaterial;
    var mainMaterialUsage = req.body.mainMaterialUsage;
    var accessories = req.body.accessories;
    var accessoriesUsage = req.body.accessoriesUsage;
    releases.addRecipe(recipeName, recipeDescription, mainMaterial, mainMaterialUsage, accessories, accessoriesUsage, err => {
      if (err == null) {
        res.json({
          date: "成功存入"
        })
      }
    })
  },
}