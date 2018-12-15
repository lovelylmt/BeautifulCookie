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
          $('#hotDishesList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'coolMeal':
          $('#coldDishesList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'soup':
          $('#soupList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'rice':
          $('#stapleFoodList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'snake':
          $('#snackList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'westDin':
          $('#westernFoodList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
        case 'cake':
          $('#bakingList').append('<li ><a ><img src="' + datas[index].img666 + '"/><span >' + datas[index].recipeName + '</span></a></li>');
          break;
      }

    }
  },
})


//搜索
function changesearch() {
  var searchItem = $('#searchItem').val();
  $("#table").bootstrapTable('destroy');
  $("#table").bootstrapTable({ // 对应table标签的id
    url: httpaddress + 'searchRecipe', // 获取表格数据的url
    cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
    striped: true, //表格显示条纹，默认为false
    pagination: true, // 在表格底部显示分页组件，默认false
    pageList: [5, 10], // 设置页面可以显示的数据条数
    pageSize: 5, // 页面数据条数
    pageNumber: 1, // 首页页码
    sidePagination: 'server', // 设置为服务器端分页
    sortName: 'id', // 要排序的字段
    sortOrder: 'desc', // 排序规则
    dataField: "data",
    singleSelect: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    ajaxOptions: {
      async: true,
      timeout: 5000
    },
    method: 'post',
    columns: [{
      checkbox: true, // 显示一个勾选框
      align: 'center' // 居中显示
    }, {
      field: "recipeName", // 返回json数据中的name
      title: '菜谱名字', // 表格表头显示文字
      align: 'center', // 左右居中
      valign: 'middle' // 上下居中

    }, {
      field: 'img666',
      title: '菜谱图片',
      align: 'center',
      valign: 'middle',
      formatter: function (data) {
        return '<img style="width:32px;height:32px" src=" ' + data + ' "/>'
      }
    }, {
      field: 'username',
      title: '用户名',
      align: 'center',
      valign: 'middle',

    }, {
      field: 'recipeType',
      title: '菜谱分类',
      align: 'center',
      valign: 'middle',

    }, {
      field: 'status',
      title: '审核状态',
      align: 'center',
      valign: 'middle',
      formatter: function (data) {
        if (data === '0') {
          return '未审核'
        } else {
          return '审核'
        }
      }
    }],
    responseHandler: responseHandler1,
    onLoadSuccess: function () { //加载成功时执行
      console.info("加载成功");
    },
    onLoadError: function () { //加载失败时执行
      console.info("加载数据失败");
    },
    queryParams: function (params) {
      console.log(params)
      return {
        recipeName: searchItem,
        limit: params.limit,
        offset: params.offset
      }
    }
  })
}