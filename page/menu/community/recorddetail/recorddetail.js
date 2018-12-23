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



  $.ajax({
    url: "http://172.20.10.2:3000/api/recordDetail",
    data: {
        "recordTitle": localStorage.getItem("recordTitle")
   },
    type: "post",
    success: function (data) {
      console.log(data);
      var datas = data.recordinfo
        $('#recordContent').append('<div class="recordName"><h3>'+datas.recordTitle+'</h3><p>发表于'+datas.date1+'</p><a class="uright"><img id="userIcon1"  src="'+datas.userIcon+'"/><span class="userName">'+datas.username+'</span></a></div><div class="box"><div class="recondImg"><img src="'+datas.recordImg+'"/></div><div class="recordContent">'+datas.recordContent+'</div></div> ')
       
   
    },
  })


   