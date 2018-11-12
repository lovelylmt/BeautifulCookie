// pageUtil.initPage('page',{
//                 curPage:1,//初始化时的默认选中页，默认第一页。如果所填范围溢出或者非数字或者数字字符串，则默认第一页
//                 showCount:9,//分页栏显示的数量
//                  pageSizeList:[5,10,15,20,25,30],//自定义分页数，默认[5,10,15,20,50]
//                  defaultPageSize:10,//默认选中的分页数,默认选中第一个。如果未匹配到数组或者默认数组中，则也为第一个
//                  isJump:true,//是否包含跳转功能，默认false
//                  isPageNum:true,//是否显示分页下拉选择，默认false
//                  isPN:true,//是否显示上一页和下一面，默认true
//                  isFL:true,//是否显示首页和末页，默认true
//                  jump:function(curPage,pageSize){//跳转功能回调，传递回来2个参数，当前页和每页大小。如果没有设置分页下拉，则第二个参数永远为0。这里的this被指定为一个空对象，如果回调中需用到this请自行使用bind方法
//                      console.log(curPage,pageSize);
//                  },
//                });

$('#id').jqPaginator({
    totalPages: 100,
    visiblePages: 10,
    currentPage: 1,

    first: '<li class="first"><a href="javascript:void(0);">First</a></li>',
    prev: '<li class="prev"><a href="javascript:void(0);">Previous</a></li>',
    next: '<li class="next"><a href="javascript:void(0);">Next</a></li>',
    last: '<li class="last"><a href="javascript:void(0);">Last</a></li>',
    page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
    onPageChange: function (num) {
        $('#text').html('当前第' + num + '页');
    }
});