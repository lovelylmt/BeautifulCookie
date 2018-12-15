//图片预览
function go() {
    var file = $("#photo")[0].files[0];
    var file1 = $("#photo1")[0].files[0];
    var file2 = $("#photo2")[0].files[0];
    var file3 = $("#photo3")[0].files[0];
    var reader = new FileReader();
    if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function (e) {

            //执行上传操作         

            $('#uploadNesc')[0].src = reader.result;
            $('#upload1')[0].style.display = 'none'
            //Object.assign(datass, { img666: reader.result });

        }
    }
    var reader1 = new FileReader();
    if (file1) {
        imgUrlBase64 = reader1.readAsDataURL(file1);
        reader1.onload = function (e) {

            //执行上传操作         

            $('#uploadNesc1')[0].src = reader1.result;
            $('#p1')[0].style.display = 'none'
            //Object.assign(datass, { img666: reader.result });

        }
    }
    var reader2 = new FileReader();
    if (file2) {
        imgUrlBase64 = reader2.readAsDataURL(file2);
        reader2.onload = function (e) {

            //执行上传操作         

            $('#uploadNesc2')[0].src = reader2.result;
            $('#p2')[0].style.display = 'none'
            //Object.assign(datass, { img666: reader.result });

        }
    }
    var reader3 = new FileReader();
    if (file3) {
        imgUrlBase64 = reader3.readAsDataURL(file3);
        reader3.onload = function (e) {

            //执行上传操作         

            $('#uploadNesc3')[0].src = reader3.result;
            $('#p3')[0].style.display = 'none'
            //Object.assign(datass, { img666: reader.result });

        }
    }
}
 


function recipeEdit() {
    var recipeName = document.getElementById("recipeName").value;
    var recipeDescription = document.getElementById("recipeDescription").value;
    var mainMaterial = document.getElementById("mainMaterial").value;
    var mainMaterialUsage = document.getElementById("mainMaterialUsage").value;
    var accessories = document.getElementById("accessories").value;
    var accessoriesUsage = document.getElementById("accessoriesUsage").value;
    var step1 = document.getElementById("step1").value;
    var step2 = document.getElementById("step2").value;
    var step3 = document.getElementById("step3").value;
    var reader = new FileReader();
    var reader1 = new FileReader();
    var reader2 = new FileReader();
    var reader3 = new FileReader();
    var file = $("#photo")[0].files[0];
    var file1 = $("#photo1")[0].files[0];
    var file2 = $("#photo2")[0].files[0];
    var file3 = $("#photo3")[0].files[0];
    
    var datass = {
        name: recipeName,
        recipeDescription: recipeDescription,
        mainMaterial: mainMaterial,
        mainMaterialUsage: mainMaterialUsage,
        accessories: accessories,
        accessoriesUsage: accessoriesUsage,
        step1: step1,
        step2: step2,
        step3: step3,
        username:localStorage.getItem('username'),
        userIcon:localStorage.getItem('userIcon'),
        status:0,
        recipeType:$('#type .on')[0].id
    };


    if (file1) {
        reader1.readAsDataURL(file1);
        reader1.onload = function (e) {
            datass.stepImg1 = reader1.result
           // Object.assign(datass, { stepImg1: reader.result });
        }
    }

    if (file2) {
        reader2.readAsDataURL(file2);
        reader2.onload = function (e) {
            datass.stepImg2 = reader2.result
          //  Object.assign(datass, { stepImg2: reader.result });
        }
    }

    if (file3) {
        reader3.readAsDataURL(file3);
        reader3.onload = function (e) {
            datass.stepImg3 = reader3.result
          //  Object.assign(datass, { stepImg3: reader.result });

           
        }
    }

    if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function (e) {    
            datass.img666 = reader.result;
            $('#uploadNesc')[0].src = reader.result;
           
            console.log(datass);
          $.post('http://172.20.10.2:3000/api/release', datass)
        }
    }


}

function imgFixed(file) {
    if (file) {
        var reader = new FileReader();
        imgUrlBase64 = reader.readAsDataURL(file);
        var AllowImgFileSize = 2100000;
        reader.onload = function (e) {
            if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                alert('上传失败，请上传不大于2M的图片！');
                return;
            } else {
                return reader.result
            }
        }
    }
}

//用户登录
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
       localStorage.setItem('userIcon',imgsrc);
        $('#userIcon')[0].src = imgsrc;
    },

})

//分类
function choose(element) {
    if($('#'+element)[0].className == 'on'){
        $('#'+element).removeClass('on');     
    }   
    else {
           $('#'+element).addClass('on');
    }

}