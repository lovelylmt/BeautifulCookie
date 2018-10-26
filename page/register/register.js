
function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username)
    console.log(password)
 $.ajax({
     url : "http://192.168.1.7:3000/api/register",
     data:{
        "username" : username ,
        "password" : password
     },
     type:"post",
     success:function () {
        console.log("成功啦！")
     },
     error : function ( ) {
        console.log("失败啦！") 
     }

 })  

}