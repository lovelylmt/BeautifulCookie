function go() {
    var file = $("#photo")[0].files[0];
    var reader = new FileReader();
    if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function (e) {
            $('#uploadNesc')[0].src = reader.result;
            $('#upload1')[0].style.display = 'none'


        }
    }
}

function recordEdit() {
    var recordTitle = document.getElementById("recordTitle").value;
    var recordContent = document.getElementById("recordContent").value;
    let date1 = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    var reader = new FileReader();
    var file = $("#photo")[0].files[0];
    var datass1 = {
        recordTitle: recordTitle,
        recordContent: recordContent,
        date1:date1,
        username: localStorage.getItem('username'),
        userIcon: localStorage.getItem('userIcon'),
        status: 0,
        recordType: $('#type .on')[0].id
    };
    if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function (e) {

            //执行上传操作         
            datass1.recordImg = reader.result;
            $('#uploadNesc')[0].src = reader.result;
           
            console.log(datass1);

            $.post('http://172.20.10.2:3000/api/releaseRecord', datass1)
            alert('日志发布成功，请等待审核!')
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
        localStorage.setItem('userIcon', imgsrc);
        $('#userIcon')[0].src = imgsrc;
    },

})

//分类
function choose(element) {
    if ($('#' + element)[0].className == 'on') {
        $('#' + element).removeClass('on');
    }
    else {
        $('#' + element).addClass('on');
    }

}