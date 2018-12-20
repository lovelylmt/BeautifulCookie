
$("#send").click(function(){
	var url="http://localhost:1337/";
	$.get(url,{
		name:$("#name").val(),
		content:$("#content").val()
	},function(data,textSattus){
		//$("#comments").html(data);
		/*var data_elem=$(data);
		$("#comments").append(data_elem);*/
 
		/*var name=data.name;
		var content=data.content;*/
		console.log(data);
		console.log(typeof data);
 
		var name=data.name;
		var content=data.content;
		$("#comments h6:last").text(name);
		$("#comments p:last").text(content);
 
	})
});
--------------------- 
作者：前端小白的江湖路 
来源：CSDN 
原文：https://blog.csdn.net/qq_21058391/article/details/52162736 
版权声明：本文为博主原创文章，转载请附上博文链接！