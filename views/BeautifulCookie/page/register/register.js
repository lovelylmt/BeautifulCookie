
function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username)
    console.log(password)
 $.ajax({
     url : "http://localhost:3000/api/register",
     data:{
        "username" : username ,
        "password" : password
     },
     type:"post",
     success:function (data) {
        if(data.register === true) {
            alert("可以注册");
        }
        else {
            alert("用户名已经有啦！");
        }
     },
     error : function ( ) {
        console.log("失败啦！") 
     }

 })  

}