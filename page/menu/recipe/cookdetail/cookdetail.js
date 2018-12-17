console.log(localStorage.getItem('username'));
if (localStorage.getItem('username') != null) {
    $('#users')[0].style.display = 'none';
    $('#user1')[0].style.display = 'block';
    // $('#userinfrom')[0].innerHTML = localStorage.getItem('username');
} else {
    $('#users')[0].style.display = 'block';
}

$.ajax({
    url: "http://172.20.10.2:3000/api/icon",
    data: {
        "username": localStorage.getItem("username")
    },
    type: "post",
    success: function (data) {
        var imgsrc = data.userIcon;
       console.log(data);
        console.log($('#userIcon'));
        $('#userIcon')[0].src = imgsrc;
        $('#userIcon1')[0].src = imgsrc;

    },

})



  $.ajax({
    url: "http://172.20.10.2:3000/api/cookdetail",
    data: {
        "recipeName": localStorage.getItem("recipeName")
   },
    type: "post",
    success: function (data) {
      console.log(data);
      var datas = data.recipeinfo
   
    
        $('#recipeContent').append('<div class="dishesName"><h1><a id="recipe_title">'+datas.recipeName+'</a></h1><a   class="uright"><img id="userIcon1" src="'+datas.userIcon+'" /><span >'+datas.username+'</span></a></div><div class="box"><div class="recipeimg"><img src="'+datas.img666+'"></div> <blockquote class="block_txt"><div id="block_txt1">'+datas.recipeDescription+'</div> </blockquote><div class="mo"><h3>食材明细</h3></div> <fieldset class="particulars"><legend>主料</legend> <div class="material"><ul><li><a>'+datas.mainMaterial+'</a><span>'+datas.mainMaterialUsage+'</span> </li></ul></fieldset><fieldset class="particulars"><legend>辅料</legend> <div class="material"><ul><li><a>'+datas.accessories
            +'</a><span>'+datas.accessoriesUsage+'</span></li> </ul></div> </fieldset><div class="dishesName1"><h1><a id="recipe_title1">'+datas.recipeName+'的做法步骤</a></h1></div><div class="recipeStep"> <ul><li><div class="stepimg"><img src="'+datas.stepImg1+'"/></div><div class="stepword"><div class="stepnum">1</div>'+datas.step1+'</div></li><li><div class="stepimg"><img src="'+datas.stepImg2+'"/></div><div class="stepword"><div class="stepnum">1</div>'+datas.step2+'</div></li><li><div class="stepimg"><img src="'+datas.stepImg3+'"/></div><div class="stepword"><div class="stepnum">1</div>'+datas.step3+'</div></li></ul></div>')
       
   
    },
  })


