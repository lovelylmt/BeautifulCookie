var releases = require('../model/release');


module.exports = {
  //用户上传菜谱
  addRecipe: (req, res) => {
    console.log(req.body.name);
    var recipeName = req.body.name;   // 菜谱名称
    var img666 = req.body.img666; //菜谱图片
    var stepImg1 = req.body.stepImg1;
    var stepImg2 = req.body.stepImg2;
    var stepImg3 = req.body.stepImg3;
    var recipeDescription = req.body.recipeDescription;
    var mainMaterial = req.body.mainMaterial;
    var mainMaterialUsage = req.body.mainMaterialUsage;
    var accessories = req.body.accessories;
    var accessoriesUsage = req.body.accessoriesUsage;
    var step1 = req.body.step1;
    var step2 = req.body.step2;
    var step3 = req.body.step3;
    var username = req.body.username;
    var userIcon = req.body.userIcon;
    var status = req.body.status;
    var recipeType = req.body.recipeType;

    releases.addRecipe(recipeName, img666, stepImg1, stepImg2, stepImg3, recipeDescription, mainMaterial, mainMaterialUsage, accessories, accessoriesUsage, step1, step2, step3, username, status, userIcon, recipeType, err => {
      if (err == null) {
        res.json({
          date: "菜谱成功存入"
        })
      }
    })
  },
  //管理员获取所有的菜谱
  getRecipe: (req, res) => {
    const { limit, offset } = req.body; //es6  解构;
    releases.getRecipe(limit, offset, err => {
      res.json({
        recipeinfo: err
      })
    }
    );
  },

  //审核插入的内容
  recipeExamine: (req, res) => {
    const recipeName = req.body.recipeName;
    releases.recipeExamine(recipeName, err => {
      res.json({
        recipeinfo: err
      })
    }
    );
  },
  //管理员发布菜谱
  upRecipe: (req, res) => {
    releases.upRecipe(
      err => {
        console.log(err);
        res.json({
          recipeinfo: err
        })
      }
    );
  },


  //具体菜谱做法
  cookdetail: (req, res) => {
    var recipeName = req.body.recipeName;
    console.log(recipeName);
    releases.cookdetail(recipeName, err => {
      console.log(err)
      res.json({
        recipeinfo: err,
      })
    })
  },

  //用户发布菜谱
  relRecipe: (req, res) => {
    const username = req.body.username;
    releases.relRecipe(username, err => {
      console.log(err);
      res.json({
        recipeinfo: err
      })
    }
    );
  },

  searchRecipe: (req, res) => {     //搜索菜谱
    const recipeName = req.body.recipeName;
    releases.searchRecipe(recipeName, err => {
      if (err !== false) {
        res.json({
          code: 200,
          data: {
            searchResult: err
          }
        })
      } else {
        res.json({
          code: 200,
          data: {
            searchResult: false
          }
        })
      }
    })
  },

}
