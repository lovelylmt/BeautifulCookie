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
                    $('#topicList1').append('<li><div class="left"><a  href="#" target="_blank"><img src="' + datas[index].userIcon + '"/><div class="name"><a href="#" target="_blank">' + datas[index].username + '</a></div></a></div><div class="down" onclick="topicDetail(this)"><div class="pp"  >' + datas[index].topicContent + '</div><a class="clear"  target="_blank" ><img src="' + datas[index].topicImg + '" /></a></div></li>')
                    break;
                case 'essenceTopic':
                    $('#topicList2').append('<li><div class="left"><a  href="#" target="_blank"><img src="' + datas[index].userIcon + '"/><div class="name"><a href="#" target="_blank">' + datas[index].username + '</a></div></a></div><div class="down" onclick="topicDetail(this)"><div class="pp"  >' + datas[index].topicContent + '</div><a class="clear"  target="_blank" ><img src="' + datas[index].topicImg + '" /></a></div></li>')
                    break;
            }
        }
    },
})

function topicDetail(data) {
    var datas = data.getElementsByTagName("div")[0].innerText;   
    console.log(data);
    localStorage.setItem('topicContent', datas);
    window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/menu/community/topic/topicDetail/topicDetail.html'

 };


//分类
function choose(element) {
    if ($('#' + element)[0].className == 'on') {
        $('#' + element).removeClass('on');
    }
    else {
        $('#' + element).addClass('on');
    }

}