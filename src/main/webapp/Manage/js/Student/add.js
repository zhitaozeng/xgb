$(function() {





    //动态加载班级号
    $("#major_id").click(function () {
        var major = $(this).find("option:selected").val();
        $.ajax({
            url: "/class/findClassByMajor?major="+major,
            context: document.body,
            success: function(data){
                $("#class_num").empty();
                $("#class_num").append("<option value='0'>请选择班级</option>");  //添加一项option
                for (i=0;i<data.length;i++) {
                    var id = data[i].id;
                    var text = data[i].name;
                    $("#class_num").append("<option value='"+id+"'>"+text+"</option>");
                }
            }
        });
    });


    $("#submit").click(function () {
       if($("#major_id").val() == 0 || $("#class_num").val() == 0){
           alert("请选择专业班级后再提交！");
           return false;
       }else{
           return true;
       }
    });


});


$(document).ready(function () {
    //动态加载专业
    $.ajax({
        url: "/major/findMajorApi",
        context: document.body,
        success: function(data){
            $("#major_id").append("<option value='0'>请选择专业</option>");  //添加一项option
            for (i=0;i<data.length;i++) {
                var id = data[i].id;
                var text = data[i].name;
                $("#major_id").append("<option value='"+id+"'>"+text+"</option>");
            }
        }
    });

});