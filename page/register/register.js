function go() {
   var file = $("#photo")[0].files[0];
   var reader = new FileReader();
   if (file) {
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {
         //执行上传操作         
         $('#uploadNesc')[0].src = reader.result;
         $('#upload')[0].style.display = 'none'
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

         //执行上传操作         
         data.userIcon = reader.result;
         $('#uploadNesc')[0].src = reader.result;
         console.log(data);

         $.post('http://172.20.10.2:3000/api/register', data)
         localStorage.setItem('username', username)
         
         if (date.date == '该用户已被注册') {
            alert('请重新注册')
         } else {
            
         }
        
      }
   }
   


};

// function register() {
//    var username = document.getElementById("username").value;
//    var password = document.getElementById("password").value;
   // var reader = new FileReader();
   // var file = $("#photo")[0].files[0];
   //     var data = {
   //      username: username,
   //    password:password
   //   };
   //   if (file) {
   //       imgUrlBase64 = reader.readAsDataURL(file);
   //       reader.onload = function (e) {

   //           //执行上传操作         
   //           data.userIcon = reader.result;
   //           $('#uploadNesc')[0].src = reader.result;
   //           console.log(data);

   //           $.post('http://172.20.10.2:3000/api/register', data);
   // localStorage.setItem('username', username)
   // if (date.date == '该用户已被注册') {
   //    alert('请重新注册')
   // } else {
   //    window.location.href = '../../index.html';
   // }



   //       }
   //   }

//    $.ajax({
//       url: "http://172.20.10.2:3000/api/register",
//       data: {
//          "username": username,
//          "password": password
//       },
//       type: "post",
//       success: function (date) {
//          console.log(date)
//          localStorage.setItem('username', username)
//          if (date.date == '该用户已被注册') {
//             alert('请重新注册')
//          } else {
//             window.location.href = '../../index.html';
//          }

//       },
//       error: function () {
//          alert('失败啦')
//       }

//    })

// }
