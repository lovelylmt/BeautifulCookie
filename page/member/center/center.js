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
        $('#username')[0].innerHTML = data.username;

    },

})

$.ajax({
    url: "http://172.20.10.2:3000/api/relRecipe",     //显示发布的菜谱
    data: {
        "username": localStorage.getItem("username")
    },
    type: "post",
    success: function (data) {

        console.log(data);
        var datas = data.recipeinfo;
        for (index in datas) {
            $('#recipe').append('<li ><a style="line-height: 50px;text-align: center; font-size: 17px;"><img src="' + datas[index].img666 + '" style="display: block;height: 230px;width: 230px;" /></a><div><a  href="#" target="_blank" style="color:black">' + datas[index].username + '</a></div><span style=" display: block;width: 328%; height: 50px;" >' + datas[index].recipeName + '</span><li>');
        }
    },
})

$.ajax({
    url: "http://172.20.10.2:3000/api/relTopic",     //显示发布的话题
    data: {
        "username": localStorage.getItem("username")
    },
    type: "post",
    success: function (data) {
        console.log(data);
        var datas = data.topicinfo;
        for (index in datas) {
            $('#topic').append('<div><a>'+ datas[index].topicContent+'</a></div><a><img src="'+ datas[index].topicImg+'"/></a>');
        }
    },
    // <li>
    //             <div class="left">
    //                 <a href="#" target="_blank"><img src="../../../../static/img/qitou.jpg"></a>
    //                 <div>
    //                     <a href="#" target="_blank">琪_feXjZ8E2</a><br>
    //                     <span>1小时前</span>
    //                 </div>
    //             </div>
    //             <div class="down">
    //                 <div class="pp"><a href="#" target="_blank">#早餐#各位早安🤗🤗天氣转凉适时添衣6</a></div>
    //                 <a class="clear" href="#" target="_blank">
    //                     <img src="../../../../static/img/qi.jpg">
    //                 </a>
    //                 <span>5条评论</span>
    //             </div>
    //         </li>
})

$.ajax({
    url: "http://172.20.10.2:3000/api/relRecord",     //显示发布的日志
    data: {
        "username": localStorage.getItem("username")
    },
    type: "post",
    success: function (data) {
        console.log(data);
        var datas = data.recordinfo;
        for (index in datas) {
            $('#record').append('<div><a>'+ datas[index].recordContent+'</a></div><a><img src="'+ datas[index].recordImg+'"/></a>');
        }
    },
})
{/* <div class="pic">
<a target="_blank" href="../../recipe/cookdetail/cookdetail.html" title="养生红枣">
    <img src="../../../../static/img/doushasu.jpg">
</a>
</div>
<div class="detail">
<h2><a target="_blank" href="#">【食·色饮品】—— 奶粉版大麦奶茶6</a></h2>
<p class="subline"><a target="_blank" href="#">1小时前</a></p>
<p>大麦奶茶其实也可以是大麦茶直接兑牛奶，但总是固执地认为奶茶之茶定是红茶。所以，大麦奶茶就是大麦茶+奶茶</p>
</div> */}