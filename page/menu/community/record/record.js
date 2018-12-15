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
        var datas = data.recordinfo
        for (index in datas) {
            switch (datas[index].recordType) {
                case 'essenceRecord':
                    $('#recordList1').append('<li><div class="pic"><a target="_blank" href="#"><img src="'+datas[index].recordImg+'"/></a></div><div class="detail"><h2><a target="_blank" href="#">'+datas[index].recordTitle+'</a></h2><p>'+datas[index].username+'</p><p>'+ datas[index].recordContent+'</p></div></li>');
                    break;
                case 'originalRecord':
                    $('#recordList2').append('<li><div class="pic"><a target="_blank" href="#"><img src="'+datas[index].recordImg+'"/></a></div><div class="detail"><h2><a target="_blank" href="#">'+datas[index].recordTitle+'</a></h2><p>'+datas[index].username+'</p><p>'+ datas[index].recordContent+'</p></div></li>');
            }
        }
    },
})


// <!-- <li>
// <div class="pic">
//     <a target="_blank" href="#" title="养生红枣">
//         <img src="../../../../static/img/doushasu.jpg">
//     </a>
// </div>
// <div class="detail">
//     <h2><a target="_blank" href="#">【食·色饮品】—— 奶粉版大麦奶茶6</a></h2>
//     <p class="subline"><a target="_blank" href="#">1小时前</a></p>
//     <p>大麦奶茶其实也可以是大麦茶直接兑牛奶，但总是固执地认为奶茶之茶定是红茶。所以，大麦奶茶就是大麦茶+奶茶</p>
// </div>
// </li> -->