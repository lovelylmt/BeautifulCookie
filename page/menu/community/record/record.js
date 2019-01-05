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
    url: "http://172.20.10.2:3000/api/upRecord",
    type: "post",
 
    success: function (data) {
        console.log(data);
      
        var datas = data.recordinfo;
      
        for (index in datas) {
            switch (datas[index].recordType) {
                case 'essenceRecord':
                    $('#recordList1').append('<li onclick="recordDetail(this)"><div class="pic" ><a ><img src="' + datas[index].recordImg + '"/></a></div><div class="detail"><h2 ><span >' + datas[index].recordTitle + '</span></h2><p>' + datas[index].date1 + '</p><p>' + datas[index].recordContent + '</p></div></li>');
                    break;
                case 'originalRecord':
                    $('#recordList2').append('<li onclick="recordDetail(this)"><div class="pic" ><a ><img src="' + datas[index].recordImg + '" /></a></div><div class="detail"><h2><span>' + datas[index].recordTitle + '</span></h2><p>' + datas[index].date1 + '</p><p>' + datas[index].recordContent + '</p></div></li>');
                    break;
            }
        }
    },
  
});


function recordDetail(data) {
    var datas = data.getElementsByTagName("span")[0].innerText;
    console.log(data);
    localStorage.setItem('recordTitle', datas);
    window.location.href = '../recorddetail/recorddetail.html'

};
