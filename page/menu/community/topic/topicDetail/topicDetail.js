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
    url: "http://172.20.10.2:3000/api/topicDetail",
    data: {
        "topicContent": localStorage.getItem("topicContent")
   },
    type: "post",
    success: function (data) {
    
    
      var datas = data.topicinfo
        $('#topicContent').append('<ul><li><div class="left"><a href="#" target="_blank"><img src="'+datas.userIcon+'"></a><div class="name"><a href="#" target="_blank">'+datas.username+'</a><br></div></div><div class="down"><div>'+datas.topicContent+'</div><a ><img src="'+datas.topicImg+'"></a></li></ul>')
     
    },
  })


  
