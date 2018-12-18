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
  url: "http://172.20.10.2:3000/api/upRecipe",
  type: "post",
  success: function (data) {
    console.log(data);
    var datas = data.recipeinfo
    console.log(datas);
    for (index in datas) {
      switch (datas[index].recipeType) {
        case 'hotMeal':
          $('#hotDishesList').append('<li ><a onclick="cookdetail(this)" ><img src="' + datas[index].img666 + '"  /><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'coolMeal':
          $('#coldDishesList').append('<li ><a onclick="cookdetail(this)" ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'soup':
          $('#soupList').append('<li ><a onclick="cookdetail(this)" ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'rice':
          $('#stapleFoodList').append('<li ><a onclick="cookdetail(this)"><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'snake':
          $('#snackList').append('<li ><a onclick="cookdetail(this)" ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'westDin':
          $('#westernFoodList').append('<li ><a onclick="cookdetail(this)"><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'cake':
          $('#bakingList').append('<li ><a onclick="cookdetail(this)"><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
      }

    }
  },
})
 //获取菜谱名字
function cookdetail(data) {
  var datas = data.getElementsByTagName("span")[0].innerText;
  console.log(datas);  
  localStorage.setItem('recipeName', datas);
  window.location.href = 'file:///C:/Users/%E6%9D%8E%E6%A2%A6%E5%A9%B7/Desktop/BeautifulCookie/page/menu/recipe/cookdetail/cookdetail.html'
};




