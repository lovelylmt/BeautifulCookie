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
        console.log($('#userIcon'));
        $('#userIcon')[0].src = imgsrc;
    },

})

$.ajax({
    url: "http://172.20.10.2:3000/api/upTopic",
    type: "post",
    success: function (data) {
        console.log(data);
        var datas = data.topicinfo
        for (index in datas) {
            switch (datas[index].topicType) {
                case 'hotTopic':
                    $('#topicList1').append('<li><div class="left"><a  href="#" target="_blank"><img src="' + datas[index].userIcon + '"/><div class="name"><a href="#" target="_blank">'+datas[index].username +'</a></div></a></div><div class="down"><div class="pp"><a href="#" target="_blank">'+ datas[index].topicContent + '</a></div><a class="clear" href="#" target="_blank"><img src="' + datas[index].topicImg + '"/></a></div></li>')
                    break;
                case 'essenceTopic':
                    $('#topicList2').append('<li><div class="left"><a  href="#"><img src="' + datas[index].userIcon + '"/></a><div><a  href="#" target="_blank">' + datas[index].username + '</a></div></div><div class="down"><div class="pp"><a href="#" target="_blank">' + datas[index].topicContent + '</a></div><a class="clear" href="#" target="_blank"><img src="' + datas[index].topicImg + '"/></a></div></li>');
                    break;
            }
        }
    },
})

{/* <li>
    <div class="left">
        <a href="#" target="_blank"><img src="../../../../static/img/qitou.jpg"></a>
        <div class="name">
            <a href="#" target="_blank">琪_feXjZ8E2</a><br>
            <span>1小时前</span>
        </div>
    </div>
    <div class="down">
        <div class="pp"><a href="#" target="_blank">#早餐#各位早安🤗🤗天氣转凉适时添衣6</a></div>
        <a class="clear" href="#" target="_blank">
            <img src="../../../../static/img/qi.jpg">
        </a>
        <span>5条评论</span>
    </div>
</li> */}

//分类
function choose(element) {
    if ($('#' + element)[0].className == 'on') {
        $('#' + element).removeClass('on');
    }
    else {
        $('#' + element).addClass('on');
    }

}