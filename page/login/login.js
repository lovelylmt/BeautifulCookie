
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);

    $.ajax({
        url: "http://172.20.10.2:3000/api/login",
        data: {
            "username": username,
            "password": password,            
        },
        type: "post",
        success: function (date) {
            console.log(date)
            if (date.date == '登录成功') {
                window.location.href = '../../index.html';
                localStorage.setItem('username', username)           
            } else {
                alert('用户名或者密码错误，请确认是否注册')
            }
        },
        error: function () {
            alert('登录失败')
        }
    })
}
