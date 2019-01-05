function go() {
   var file = $("#photo")[0].files[0];
   var reader = new FileReader();
   if (file) {
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {
         //执行上传操作         
         $('#uploadNesc')[0].src = reader.result;
         $('#p1')[0].style.display = 'none'
      }
   }
}

function register() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var reader = new FileReader();
   var file = $("#photo")[0].files[0];
   var data = {
      username: username,
      password: password
   };
   if (file) {
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {    
         data.userIcon = reader.result;
         $('#uploadNesc')[0].src = reader.result;
         var userIcon = data.userIcon
         $.post('http://172.20.10.2:3000/api/register', data)
         localStorage.setItem('username', username)
         localStorage.setItem('userIcon', userIcon)
         if (data.date == '该用户已被注册') {
            alert('请重新注册')
         } else {
            alert('注册成功')
            window.location.href = '../member/center/center.html';
         }

      }
   }
};



