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
            $('#recipe').append('<li ><a onclick="cookdetail(this)" ><img src="' + datas[index].recipeImg + '"  /><span >' + datas[index].recipeName + '</span></a></li>');
        }
    },
})

function cookdetail(data) {
    var datas = data.getElementsByTagName("span")[0].innerText;   //获取菜谱名字
    console.log(data);  
    localStorage.setItem('recipeName', datas);
    window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/menu/recipe/cookdetail/cookdetail.html'
  
  };

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
            $('#topic').append('<li><div class="left"><a  href="#" target="_blank"><img src="' + datas[index].userIcon + '"/><div class="name"><a href="#" target="_blank">' + datas[index].date1 + '</a></div></a></div><div class="down" onclick="topicDetail(this)"><div class="pp"  ><a >' + datas[index].topicContent + '</a></div><a class="clear"  target="_blank" ><img src="' + datas[index].topicImg + '" /></a></div></li>');
        }
    },
})

function topicDetail(data) {   //获取话题内容
    var datas = data.getElementsByTagName("div")[0].innerText;   
    console.log(data);
    localStorage.setItem('topicContent', datas);
    window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/menu/community/topic/topicDetail/topicDetail.html'

 };

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
            $('#record').append('<li onclick="recordDetail(this)"><div class="pic" ><a ><img src="' + datas[index].recordImg + '" /></a></div><div class="detail"><h2><span>' + datas[index].recordTitle + '</span></h2><p>' + datas[index].date1 + '</p><p>' + datas[index].recordContent + '</p></div></li>');
        }
    },
})

function recordDetail(data) {
     var datas = data.getElementsByTagName("span")[0].innerText;
    console.log(data);
    localStorage.setItem('recordTitle', datas);
    window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/menu/community/recorddetail/recorddetail.html'

};



// //个人中心
// $.ajax({
//     url: "http://172.20.10.2:3000/api/userCenter",     //显示发布的菜谱
//     data: {
//         "username": localStorage.getItem("username")
//     },
//     type: "post",
//     success: function (data) {

//         console.log(data);
//         var datas = data.recipeinfo;
//         var datas = data.topicinfo;
//         var datas = data.recordinfo;
//         for (index in datas) {
//             // $('#recipe').append('<li ><a onclick="cookdetail(this)" ><img src="' + datas[index].recipeImg + '"  /><span >' + datas[index].recipeName + '</span></a></li>');
//         }
//     },
// })