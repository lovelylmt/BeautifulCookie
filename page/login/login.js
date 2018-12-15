
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);

    $.ajax({
        url: "http://172.20.10.2:3000/api/login",
        data: {
            "username": username,
            "password": password
        },
        type: "post",
        success: function (date) {
            console.log(date)

            if (date.date == '登录成功') {
                window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/member/center/center.html';
                localStorage.setItem('username',username)
            } else {
                alert('用户名或者密码错误')
            }

        },
        error: function () {
            alert('登录失败')
        }

    })

}