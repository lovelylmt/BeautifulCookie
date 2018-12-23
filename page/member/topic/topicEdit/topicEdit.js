function go() {
  
    var file1 = $("#photo1")[0].files[0];

var reader1 = new FileReader();
    if (file1) {
        imgUrlBase64 = reader1.readAsDataURL(file1);
        reader1.onload = function (e) {

            //执行上传操作         

            $('#uploadNesc1')[0].src = reader1.result;
            $('#p1')[0].style.display = 'none'
            //Object.assign(datass, { img666: reader.result });

        }
    };
}

function topicEdit() {
    var topicContent = document.getElementById("topicContent").value;
    let date1 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    var reader = new FileReader();
 
    var file = $("#photo1")[0].files[0];
   
    var datass2 = {
        topicContent: topicContent,
        date1:date1,
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
            $('#uploadNesc1')[0].src = reader.result;
            console.log(datass2);

            $.post('http://172.20.10.2:3000/api/releaseTopic', datass2)
            window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/member/center/center.html'

        }
    }

};
function imgFixed(file) {
    if (file) {
        var reader = new FileReader();
        imgUrlBase64 = reader.readAsDataURL(file);
        var AllowImgFileSize = 2100000;
        reader.onload = function (e) {
            if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                alert('上传失败，请上传不大于2M的图片！');
                return;
            } else {
                return reader.result
            }
        }
    }
}

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