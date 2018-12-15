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


// $.ajax({
//     url: "http://172.20.10.2:3000/api/upRecipe",
//     type: "post",
//     success: function (data) {
//         console.log(data);
//         var datas = data.recipeinfo
//         console.log(datas);
//         for (index in datas) {
//             switch(datas[index].recipeType){
//                 case 'hotMeal':
//                 $('#hotDishesList').append('<li ><a style="line-height: 50px;text-align: center; font-size: 17px;"><img src="' + datas[index].img666 + '" style="display: block;height: 230px;width: 230px;" /></a><span style=" display: block;width: 328%; height: 50px;" >' + datas[index].recipeName + '</span><li>');
//                 break;
//                 case 'coolMeal':
//                 $('#coldDishesList').append('<li ><a style="line-height: 50px;text-align: center; font-size: 17px;"><img src="' + datas[index].img666 + '" style="display: block;height: 230px;width: 230px;" /></a><span style=" display: block;width: 328%; height: 50px;" >' + datas[index].recipeName + '</span><li>');
//                 break;
//                 case 'soup':
//                 $('#soup').append('<li ><a style="line-height: 50px;text-align: center; font-size: 17px;"><img src="' + datas[index].img666 + '" style="display: block;height: 230px;width: 230px;" /></a><span style=" display: block;width: 328%; height: 50px;" >' + datas[index].recipeName + '</span><li>');
//                 break;
//                 case 'stapleFood':

//                 case 'snack':

//                 case 'westernFood':

//                 case 'baking':

//             }
          
//         }
//     },
// })
