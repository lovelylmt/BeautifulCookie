function go() {
    var file = $("#photo")[0].files[0];
    var reader = new FileReader();
    if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function (e) {

            //执行上传操作         

            $('#uploadNesc')[0].src = reader.result;
            $('#upload1')[0].style.display = 'none'


        }
    }
}

function topicEdit() {
    var topicContent = document.getElementById("topicContent").value;
    var reader = new FileReader();
    var file = $("#photo")[0].files[0];
    var datass2 = {
        topicContent: topicContent,
        username:localStorage.getItem('username'),
        userIcon:localStorage.getItem('userIcon'),
        status:0,
        topicType:$('#type .on')[0].id
    };
    if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function (e) {

            //执行上传操作         
            datass2.topicImg = reader.result;
            $('#uploadNesc')[0].src = reader.result;
            console.log(datass2);

            $.post('http://172.20.10.2:3000/api/releaseTopic', datass2)
        }
    }

};



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
        localStorage.setItem('userIcon',imgsrc);
        $('#userIcon')[0].src = imgsrc;
    },

})
//分类
function choose(element) {
    if($('#'+element)[0].className == 'on'){
        $('#'+element).removeClass('on');     
    }   
    else {
           $('#'+element).addClass('on');
    }

}