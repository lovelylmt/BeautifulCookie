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
        $('#userIcon')[0].src = imgsrc;
    },

})


//显示菜谱
$.ajax({
    url: "http://172.20.10.2:3000/api/cookdetail",
    data: {
        "recipeName": localStorage.getItem("recipeName"),
    },
    type: "post",
    success: function (data) {
        console.log(data);
        var datas = data.recipeinfo
        $('#recipeContent').append('<div class="dishesName" onclick="Iscomment()"><h1 ><a id="recipe_title" >' + datas.recipeName + '</a></h1><a  class="uright" onclick="user(this)"><img  id="userIcon1" src="' + datas.userIcon + '" /><span >' + datas.username + '</span></a></div><div class="box"><div class="recipeimg"><img src="' + datas.recipeImg + '"></div> <blockquote class="block_txt"><div id="block_txt1">' + datas.recipeDescription + '</div> </blockquote><div class="mo"><h3>食材明细</h3></div> <fieldset class="particulars"><legend>主料</legend> <div class="material"><ul><li><a>' + datas.mainMaterial + '</a></li></ul></fieldset><fieldset class="particulars"><legend>辅料</legend> <div class="material"><ul><li><a>' + datas.accessories
            + '</a></li> </ul></div> </fieldset><div class="dishesName1"><h1><a id="recipe_title1">' + datas.recipeName + '的做法步骤</a></h1></div><div class="recipeStep"> <ul><li><div class="stepimg"><img src="' + datas.stepImg1 + '"/></div><div class="stepword"><div class="stepnum">1</div>' + datas.step1 + '</div></li><li><div class="stepimg"><img src="' + datas.stepImg2 + '"/></div><div class="stepword"><div class="stepnum">1</div>' + datas.step2 + '</div></li><li><div class="stepimg"><img src="' + datas.stepImg3 + '"/></div><div class="stepword"><div class="stepnum">1</div>' + datas.step3 + '</div></li></ul></div>')
    },
})


//提交评论
function recipeComment() {
    var recipeComment = document.getElementById("recipeComment").value;
    let date1 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    var data = {
        recipeComment: recipeComment,
        recipeName: localStorage.getItem("recipeName"),
        username: localStorage.getItem('username'),
        userIcon: localStorage.getItem('imgsrc'),
        status: 0,
        date1: date1,
    };
    $.post('http://172.20.10.2:3000/api/commentRecipe', data)
    alert('评论成功，请等待审核！')
    window.location.reload();
}

//显示评论
$.ajax({
    url: "http://172.20.10.2:3000/api/releaseComment",
    data: {
        "recipeName": localStorage.getItem("recipeName"),
    },
    type: "post",
    success: function (data) {
        console.log(data);
        var datas = data.commentinfo;
        for(index in datas){
            $('#commentContent').append('<li><div class="icon"><a><img src="' + datas[index].userIcon + '" /></a></div><div class="detail"><div class="tools"><div class="left"><a>' + datas[index].username + '</a><span id="show">' + datas[index].date1 + '</span></div></div><div class="content">' + datas[index].recipeComment + '</div></div></li>')

        }

    },
})


