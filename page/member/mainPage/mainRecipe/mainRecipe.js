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

